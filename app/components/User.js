import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    render() {
        const userListItemClass = `user-list__item ${this.props.user.isArchive ? 'user-list__item--archive' : ""}`;

        return(
            <li className={userListItemClass}>
                <Link className='user-list__link' to='/user-form-edit' onClick={this.props.onClickUser.bind(this)}>
                    <div className='user-list__name'>{this.props.user.name}</div>
                    <div className='user-list__role'>{this.props.user.role}</div>
                    <div className='user-list__phone'>{this.props.user.phone}</div>
                    <div className='user-list__birthday'>{this.props.user.birthday}</div>
                    {this.props.user.isArchive ? <div className='user-list__archive'>В архиве</div> : null}
                </Link>
            </li>

        )
    }
}