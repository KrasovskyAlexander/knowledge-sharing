import { Middleware } from 'redux';
import {ActionTypes} from "./types.ts";

const isProd = true; // mock value

const logger = (type: string, paths: string[], act: string): void => {
    const logText = `State was ${act} in action: ${type} and path to mutate data: ${paths.join(', ')}`;
    if (isProd) {
        console.warn(logText);
    } else {
        throw new Error(logText)
    }
}

const detectMutationMiddleware: Middleware<{}, ActionTypes> = ({getState}) => (next) => (action) => {
    const prevState = getState();
    const prevCopyState = structuredClone(getState());
    const result = next(action);
    const nextState = getState();

    const mutatedPaths: string[] = [];
    const unnecessaryCopyPaths: string[] = [];

    const deepCompare = (obj1: any, obj1Copy: any, obj2: any, path = ''): void => {
        if (typeof obj1Copy === 'object' && obj1Copy !== null && typeof obj2 === 'object' && obj2 !== null) {
            const keys = new Set([...Object.keys(obj1Copy), ...Object.keys(obj2)]);
            for (const key of keys) {
                const newPath = path ? `${path}.${key}` : key; // Накопление пути
                deepCompare(obj1[key], obj1Copy[key], obj2[key], newPath);
            }
        }

        if (obj1 === obj2 && JSON.stringify(obj1Copy) !== JSON.stringify(obj2)) {
            if (!mutatedPaths.some(p => p.startsWith(path + '.'))) {
                mutatedPaths.push(path);
            }
        }

        if (obj1 !== obj2 && JSON.stringify(obj1) === JSON.stringify(obj2)) {
            if (!unnecessaryCopyPaths.some(p => p.startsWith(path + '.'))) {
                unnecessaryCopyPaths.push(path);
            }
        }
    };

    deepCompare(prevState, prevCopyState, nextState);

    if (mutatedPaths.length > 0) {
        logger(action.type, mutatedPaths, 'mutated');
    }

    if (unnecessaryCopyPaths.length > 0) {
        logger(action.type, unnecessaryCopyPaths, 'unnecessary copy');
    }

    return result;
};

export default detectMutationMiddleware;
