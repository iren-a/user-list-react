import React from 'react';
import {Link} from 'react-router-dom';
import FilterForm from './FilterForm'

export default class UserControl extends React.Component {
    render() {
        return(
            <div className='user-control'>
                <FilterForm filterHandler={this.props.filterHandler} />
                <Link to='/user-form-create'>Добавить нового пользователя</Link>
            </div>
        )
    }
}
