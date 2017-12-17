/**
 * Component template.
 * 
 * Note that this file has a `.tsx` suffix, as it contains React elements.
 */

import * as React from 'react';
import { Props, Actions } from '../containers/Petstore';

/**
 * Interface for private internal component state.
 */
interface State {
    
}

/**
 * The initial state for our internal component state.
 */
const INITIAL_STATE: State = {
    
};

export default class Example extends React.Component<Props & Actions, State> {

    state = INITIAL_STATE;

    addPet = () => {
        this.props.onAddPet('test');
    }

    componentDidMount() {
        // TODO this is run before rehydrate
        this.props.loadPets();
    }

    render() {
        const { pets } = this.props;

        return (
            <div>
                <h1>Petstore</h1>
                <p>
                    <button onClick={this.props.loadPets}>Reload</button>
                    &nbsp;
                    <button onClick={this.addPet}>Add Pet</button>
                    {this.props.saving && (
                        <span>Saving&hellip;</span>
                    )}
                </p>
                {this.props.error && (
                    <p style={{color: 'red'}}>{this.props.error.message}</p>
                )}
                {!!pets.length && (
                    <table style={{margin: '0 auto', width: '60%'}}>
                        <thead>
                            <tr>
                                <th>Pet</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets.filter((pet, index) => index < 20)
                                .map((pet, index) => 
                                <tr key={index}>
                                    <td>{pet.name}</td>
                                    <td>{pet.status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}
