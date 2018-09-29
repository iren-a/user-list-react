import React from 'react';
import {Link} from 'react-router-dom';
import FilterForm from './FilterForm'

export default class UserControl extends React.Component {
    render() {
        return(
            <div className='user-list__control'>
                <Link className='btn' to='/user-form-create'>Добавить нового пользователя</Link>
                <FilterForm filterHandler={this.props.filterHandler} />
            </div>
        )
    }
}
