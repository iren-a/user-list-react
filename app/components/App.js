import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import firebase from 'firebase';
import UserList from './UserList';
import UserForm from './UserForm';
import ErrorBoundary from './ErrorBoundary';
import style from './../less/style.less'



const config = {
    apiKey: 'AIzaSyC6sjHpeyIvisGIG844B-YgAfXk8AQKnyY',
    databaseURL: 'https://users-database-fb25d.firebaseio.com'
};

firebase.initializeApp(config);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    _onClickUser() {
        App.editedUser = this.props.user;
    }

    render() {
        return(
            <Switch>
                <Route exact path='/' component={(props) => <UserList {...props} onClickUser={this._onClickUser} />}/>
                <Route path='/user-form-create' component={(props) => <UserForm {...props} isNewUser={true} editedUser={null} />}/>
                <Route path='/user-form-edit' component={(props) => <UserForm {...props} isNewUser={false} editedUser={App.editedUser} />}/>
            </Switch>
        )
    }
}

ReactDOM.render(
    (
        <HashRouter>
            <App />
        </HashRouter>
    ), document.getElementById('app')
)