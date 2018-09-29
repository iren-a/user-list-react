import React from 'react'
import firebase from 'firebase';
import { createHashHistory } from 'history';

const history = createHashHistory();

export default class UserForm extends React.Component {
    _clearForm() {
        this._name.value = '';
        this._phone.value = '';
        this._birthday.value = '';
        this._role.value = '';
        this._isArchive.checked = false;
    }

    _submitForm(evt) {
        evt.preventDefault();

        const user = {
            name: this._name.value,
            phone: this._phone.value,
            birthday: this._birthday.value,
            role: this._role.value,
            isArchive: this._isArchive.checked
        };

        if (this.props.isNewUser) {
            // create user
            firebase.database().ref().push(user);
        } else {
            // update user
            let updates = {};
            if (user.name !== this.props.editedUser.name) {
                updates[`/${this.props.editedUser['.key']}/name/`] = user.name;
            }
            if (user.phone !== this.props.editedUser.phone) {
                updates[`/${this.props.editedUser['.key']}/phone/`] = user.phone;
            }
            if (user.birthday !== this.props.editedUser.birthday) {
                updates[`/${this.props.editedUser['.key']}/birthday/`] = user.birthday;
            }
            if (user.role !== this.props.editedUser.role) {
                updates[`/${this.props.editedUser['.key']}/role/`] = user.role;
            }
            if (user.isArchive !== this.props.editedUser.isArchive) {
                updates[`/${this.props.editedUser['.key']}/isArchive/`] = user.isArchive;
            }
            firebase.database().ref().update(updates);
        }

        this.props.history.push('/');
    };

    _cancel(evt) {
        evt.preventDefault();

        this.props.history.push('/');
    };

    render() {
        const emptyUser = {
            birthday: '',
            isArchive: false,
            name: '',
            phone: '',
            role: ''
        };

        const user = this.props.editedUser || emptyUser;

        return(
            <form className='user-form' onSubmit={this._submitForm.bind(this)}>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" defaultValue={user.name} required ref={(input) => this._name = input}/>
                <label htmlFor="phone">Телефон</label>
                <input type="text" id="phone" defaultValue={user.phone} placeholder="+7 (ХХХ) ХХХ-XXXX" pattern="^(\+7) \([0-9]{3}\) [0-9]{3}-[0-9]{4}" required ref={(input) => this._phone = input}/>
                <label htmlFor="birthday">Дата рождения</label>
                <input type="text" id="birthday" defaultValue={user.birthday} placeholder="дд.мм.гггг" pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}" required ref={(input) => this._birthday = input}/>
                <label htmlFor="role">Специальность</label>
                <select name="role-name" id="role" defaultValue={user.role} required ref={(input) => this._role = input}>
                    <option value="designer">Дизайнер</option>
                    <option value="developer">Разработчик</option>
                    <option value="manager">Контент-менеджер</option>
                </select>
                <label htmlFor="is-archive">В архиве?</label>
                {
                    user.isArchive ?
                        <input type="checkbox" name="status-toggle" value="status" id="is-archive" defaultChecked ref={(input) => this._isArchive = input}/> :
                        <input type="checkbox" name="status-toggle" value="status" id="is-archive" ref={(input) => this._isArchive = input}/>
                }
                {
                    this.props.isNewUser ?
                        <button type="submit">Сохранить</button> :
                        <button type="submit">Редактировать</button>
                }
                <button type="button" onClick={this._cancel.bind(this)}>Отмена</button>
            </form>
        )
    }
}
