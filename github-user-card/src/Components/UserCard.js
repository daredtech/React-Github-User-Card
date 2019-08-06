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
            <>
            <div className='user-card'>
                <h2> GitHub User Info</h2>
                <p> username: {this.state.usercard.login} </p>
                <h3> {this.state.usercard.name}</h3>
            <img width='200px' alt='user-avatar' src={this.state.usercard.avatar_url}/> 
            </div>

            <div className='followers'>
            <h2> List of Followers</h2>

            {this.state.userfollowers.map(follower => {
                return <div className='follower' key={follower.login}> 
                <img width='15px' alt='user-follower-avatar' src={follower.avatar_url}/> <span >{follower.login}</span>

                </div>
        })}

</div>
</>
           
           
        )
    }

} 

export default UserCard;