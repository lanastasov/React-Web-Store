import React from 'react';
import { getFunName } from '../helpers.js';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    myInput = React.createRef();
    static propTypes = {
        history: PropTypes.object
    };
    goToStore(event) {
        event.preventDefault();
        console.log('You changed the url');
        // first grab the text from the box
        const storeName = this.myInput.current.value;
        // second we are going to transition from / to /store/:storeId
        this.props.history.push(`/store/${storeName}`);
        
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name"
                        defaultValue={getFunName()}
                        ref={this.myInput} />
                <button type="submit">Visit Store -&gt;</button>
            </form>

        )
    }
}

export default StorePicker;