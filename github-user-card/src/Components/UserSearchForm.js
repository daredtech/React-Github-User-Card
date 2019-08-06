import React from 'react';

 class UserSearchForm extends React.Component {

    constructor () {
        super();
        this.state = { 
            username: ''
        };
    };

    // update the input value as it changes
    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
            });
        // temp for debugging
        console.log(event.target.value);
    };

    submitItem = event => {
        // to prevent the dafault event
        event.preventDefault();
        // to clear the input after submission
        event.target.reset();
        // //add the item
        // this.props.addItem(this.state.item);
        // // temp for debugging
        // console.log('Item added');
    }


    render () {
        return (
            <form className='user-search-form' onSubmit={this.submitItem}>

            <input 
            type = 'text'
            value = {this.username}
            name = 'username'
            placeholder = 'enter the username'
            onChange = {this.handleChanges}
            />
           
            <button > Search </button>
            {/* <button onClick={this.props.clearItems}> Clear Components </button> */}

            </form>
        )
    }
 }

 export default UserSearchForm;