import React from 'react';
import reactFireMixin from 'reactfire';
import createReactClass from 'create-react-class';
import firebase from 'firebase';
import Header from './Header';
import User from './User';
import UserControl from './UserControl';


const UserList = createReactClass({
    mixins: [reactFireMixin],

    getInitialState () {
        return {
            users: [],
            filterCondition: null
        };
    },

    componentDidMount() {
        this.bindAsArray(firebase.database().ref(), 'users');
    },

    _filterHandler(filterCondition) {
        this.setState({filterCondition: filterCondition});
    },

    render() {
        let users = this.state.users;

        if (this.state.filterCondition) {
            users = this.state.users
                .filter((user) =>
                    (user.role === this.state.filterCondition.role || this.state.filterCondition.role === '*') &&
                    user.isArchive === this.state.filterCondition.isArchive
                );

            if (this.state.filterCondition.sortByName) {
                users.sort((userA, userB) =>
                    userA.name < userB.name ? -1 : 1
                )
            }

            if (this.state.filterCondition.sortByBirthday) {
                users.sort((userA, userB) =>
                    new Date(userA.birthday.replace( /(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3')) < new Date(userB.birthday.replace( /(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3')) ? -1 : 1
                )
            }
        }

        return(
            <div className='wrapper'>
                <Header />
                <UserControl filterHandler={this._filterHandler} />
                <ul className='user-list'>
                    {
                        users.map((item) => {
                            return <User onClickUser={this.props.onClickUser} key={item['.key']} user={item}/>;
                        })
                    }
                </ul>
            </div>
        )
    }
});

export default UserList;

