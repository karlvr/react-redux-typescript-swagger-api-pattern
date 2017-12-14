/**
 * Component template.
 * 
 * Note that this file has a `.tsx` suffix, as it contains React elements.
 */

import * as React from 'react';
import { Props, Actions } from '../containers/example';

/**
 * Interface for private internal component state.
 */
interface State {
    myValue: string;
}

/**
 * The initial state for our internal component state.
 */
const INITIAL_STATE: State = {
    myValue: 'Example',
};

export default class Example extends React.Component<Props & Actions, State> {

    state = INITIAL_STATE;

    /**
     * An ES6 function definition. We define the function like this, rather than as per
     * the render() function below so that it binds `this` automatically.
     */
    doExample = () => {
        this.props.onExample(this.state.myValue);
    }

    render() {
        const { exampleProperty } = this.props;

        return (
            <div>
                <p>{exampleProperty}</p>
                <button onClick={this.doExample}>Example</button>
            </div>
        );
    }
}
