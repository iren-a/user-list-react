import React from 'react';

export default class User extends React.Component {
    render() {
        return(
            <li className='user-list__item'>
                <div className='user-list__name'>{this.props.name}</div>
                <div className='user-list__role'>{this.props.role}</div>
                <div className='user-list__phone'>{this.props.phone}</div>
                <div className='user-list__birthday'>{this.props.birthday}</div>
            </li>
        )
    }
}