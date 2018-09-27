import React from 'react';
import UserForm from "./UserForm";

export default class UserControl extends React.Component {
    render() {
        const _createNewUser = () => {
            console.log('_createNewUser');
        };

        return(
            <div className='user-control'>
                <div className='user-control__search-form'></div>
                <button className='user-control__create-user-btn' onClick={_createNewUser}>Добавить нового пользователя</button>
                <UserForm />
            </div>
        )
    }
}