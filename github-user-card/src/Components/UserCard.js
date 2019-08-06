import React from 'react';


class UserCard extends React.Component{

    constructor () {
        super();
        // set the initial state to empty 
        this.state = {
            usercard: ['should be replaced']
        }
    }
    
    // get the user data from api
    fetchUserData = () =>{
        fetch('https://api.github.com/users/daredtech')
        // if successful
        .then(response => {
            // temp
            // console.log(response);
            return response.json();
        })
        .then(userData => {
            // temp
            console.log(userData)
            this.setState({ usercard: userData});
            // temp
            console.log(this.state.usercard)
        })

        // if not successful
        .catch(error => {
            // temp
            console.log('unable to complete the request')
        })
    }

    // when component mounted, get the user data
    componentDidMount(){
        this.fetchUserData();
        console.log('should be updated state: ', this.state.usercard);
    }
    

    render (){
        console.log('in render: ', this.state.usercard);

        return (
            <div className='user-card'>
           
            </div>
        )
    }

} 

export default UserCard;