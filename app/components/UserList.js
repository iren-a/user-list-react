import React from 'react';
import ReactFireMixin from 'reactfire';
import createReactClass from 'create-react-class';
import firebase from 'firebase';
import User from './User';


const UserList = createReactClass({
    mixins: [ReactFireMixin],

    getInitialState () {
        return {
            users: [],
            showArchive: true
        };
    },

    componentDidMount() {
        this.bindAsArray(firebase.database().ref(), 'users');
    },

    render() {
        return(
            <ul className='user-list'>
            {
                this.state.users.map((item) => {
                    return <User key={item.id} name={item.name} role={item.role} phone={item.phone} birthday={item.birthday}/>;
                })
            }
            </ul>
        )
    }
});

export default UserList;

