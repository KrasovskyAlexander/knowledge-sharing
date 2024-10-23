import { ActionTypes, NOT_MUTATION_CHANGE, MUTATION_CHANGE, MUTATION_CHANGE2, MUTATION_CHANGE3, MUTATION_CHANGE4, UNNECESSARY_COPY } from './types';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import mutationLogger from './mutationLogger';

interface State {
    deepState: {
        nested: {
            data: string;
        };
        user: string[];
    };
}

const initialState: State = {
    deepState: {
        nested: {
            data: 'initial'
        },
        user: []
    }
};

export const rootReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case NOT_MUTATION_CHANGE:
            return {
                ...state,
                deepState: {
                    ...state.deepState,
                    nested: {
                        ...state.deepState.nested,
                        data: 'notMutate',
                    },
                },
            };

        case MUTATION_CHANGE:
            state.deepState.nested.data = 'Mutate1';
            return state;

        case MUTATION_CHANGE2:
            const newState = {
                ...state,
                deepState: {
                    ...state.deepState,
                },
            };
            newState.deepState.nested.data = 'Mutate2';
            return newState;

        case MUTATION_CHANGE3:
            state.deepState.user.push('Alex');
            return state;

        case MUTATION_CHANGE4:
            state.deepState.nested.data = 'Mutate4';
            state.deepState.user.push('Alex');
            return state;

        case UNNECESSARY_COPY:
            return {
                ...state,
                deepState: {
                    ...state.deepState,
                    nested: {
                        ...state.deepState.nested,
                    },
                },
            };

        default:
            return state;
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(mutationLogger)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
