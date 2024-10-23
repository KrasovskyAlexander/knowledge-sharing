export const MUTATION_CHANGE = "MUTATION_CHANGE";
export const MUTATION_CHANGE2 = "MUTATION_CHANGE2";
export const MUTATION_CHANGE3 = "MUTATION_CHANGE3";
export const MUTATION_CHANGE4 = "MUTATION_CHANGE4";
export const NOT_MUTATION_CHANGE = "NOT_MUTATION_CHANGE";
export const UNNECESSARY_COPY = "UNNECESSARY_COPY";

interface MutationChangeAction {
    type: typeof MUTATION_CHANGE;
}

interface MutationChange2Action {
    type: typeof MUTATION_CHANGE2;
}

interface MutationChange3Action {
    type: typeof MUTATION_CHANGE3;
}

interface MutationChange4Action {
    type: typeof MUTATION_CHANGE4;
}

interface NotMutationChangeAction {
    type: typeof NOT_MUTATION_CHANGE;
}

interface UnnecessaryCopyAction {
    type: typeof UNNECESSARY_COPY;
}

export type ActionTypes =
    | MutationChangeAction
    | MutationChange2Action
    | MutationChange3Action
    | MutationChange4Action
    | NotMutationChangeAction
    | UnnecessaryCopyAction;

