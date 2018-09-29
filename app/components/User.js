import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    render() {
        return(
            <li className='user-list__item'>
                <Link className='user-list__link' to='/user-form-edit' onClick={this.props.onClickUser.bind(this)}>
                    <div className='user-list__name'>{this.props.user.name}</div>
                    <div className='user-list__role'>{this.props.user.role}</div>
                    <div className='user-list__phone'>{this.props.user.phone}</div>
                    <div className='user-list__birthday'>{this.props.user.birthday}</div>
                </Link>
            </li>

        )
    }
}