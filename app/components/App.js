import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import Header from './Header';
import UserList from './UserList';
import style from './../less/style.less'

const config = {
    apiKey: 'AIzaSyC6sjHpeyIvisGIG844B-YgAfXk8AQKnyY',
    databaseURL: 'https://users-database-fb25d.firebaseio.com'
};

firebase.initializeApp(config);

class App extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <UserList/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app')
)