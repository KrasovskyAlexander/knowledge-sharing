import { useSelector, useDispatch } from 'react-redux';
import {
    mutationChange,
    mutation2Change,
    mutation3Change,
    mutation4Change,
    notMutationChange,
    unnecessaryCopy
} from "./store/action.ts";
import {AppDispatch, RootState} from './store/store.ts';

const App = () => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>State: {JSON.stringify(state)}</h2>
            <button onClick={() => dispatch(mutationChange())}>Mutate(wrong)</button>
            <button onClick={() => dispatch(mutation2Change())}>Mutate and copy(wrong)</button>
            <button onClick={() => dispatch(mutation3Change())}>Mutate with array(wrong)</button>
            <button onClick={() => dispatch(mutation4Change())}>Mutate combined(arr and nested obj)(wrong)</button>
            <button onClick={() => dispatch(notMutationChange())}>
                Not Mutate
            </button>
            <button onClick={() => dispatch(unnecessaryCopy())}>
                Unnecessary Copy
            </button>
        </div>
    );
};

export default App;
