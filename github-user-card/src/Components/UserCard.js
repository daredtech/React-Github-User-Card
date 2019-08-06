import React from 'react';


class UserCard extends React.Component{

    constructor () {
        super();
        // set the initial state to empty 
        this.state = {
            usercard: [],
            userfollowers: []
        }
    }
    
    // get the user data from api
    fetchUserData = () =>{
        fetch('https://api.github.com/users/daredtech')
        // if successful
        .then(response => {
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

    // get the user's followers from api
    fetchUserFollowers = () =>{
        fetch('https://api.github.com/users/daredtech/followers')
        // if successful
        .then(response => {
            return response.json();
        })
        .then(userFollowers => {
            // temp
            console.log(userFollowers)
            this.setState({ userfollowers: userFollowers});
            // temp
            console.log(this.state.userfollowers)
        })

        // if not successful
        .catch(error => {
            // temp
            console.log('unable to complete the request')
        })
    }


    // when component mounted, 
    // get the user data and user's followers
    componentDidMount(){
        this.fetchUserData();
        this.fetchUserFollowers();
    }
    

    render (){

        return (
            <div className='user-card'>
            <img alt='user-avatart' src={this.state.usercard.avatar_url}/> 
            <h4>{this.state.usercard.login}</h4>

            {this.state.userfollowers.map(follower => {
                return <div className='follower' key={follower.login}> 
               {follower.login}
                </div>
        })}
           
            </div>
        )
    }

} 

export default UserCard;