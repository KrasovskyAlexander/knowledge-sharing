import {
    ActionTypes,
    MUTATION_CHANGE,
    MUTATION_CHANGE2,
    MUTATION_CHANGE3,
    MUTATION_CHANGE4,
    NOT_MUTATION_CHANGE,
    UNNECESSARY_COPY,
} from './types';

export const mutationChange = (): ActionTypes => ({
    type: MUTATION_CHANGE,
});

export const mutation2Change = (): ActionTypes => ({
    type: MUTATION_CHANGE2,
});

export const mutation3Change = (): ActionTypes => ({
    type: MUTATION_CHANGE3,
});

export const mutation4Change = (): ActionTypes => ({
    type: MUTATION_CHANGE4,
});

export const notMutationChange = (): ActionTypes => ({
    type: NOT_MUTATION_CHANGE,
});

export const unnecessaryCopy = (): ActionTypes => ({
    type: UNNECESSARY_COPY,
});
