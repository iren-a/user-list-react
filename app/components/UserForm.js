import React from 'react';
import firebase from 'firebase';

export default class UserForm extends React.Component {
    _submitForm(evt) {
        evt.preventDefault();
        const user = {
            name: this._name.value,
            phone: this._phone.value,
            birthday: this._birthday.value,
            role: this._role.value,
            isArchive: this._isArchive.checked

        };

        firebase.database().ref().push(user);

        this._name.value = '';
        this._phone.value = '';
        this._birthday.value = '';
        this._role.value = '';
        this._isArchive.checked = false;
    };

    render() {
        return(
            <form className='user-form' onSubmit={this._submitForm.bind(this)}>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" required ref={(input) => this._name = input}/>
                <label htmlFor="phone">Телефон</label>
                <input type="text" id="phone" placeholder="+7 ХХХ ХХ ХХ" pattern="^(\+7) [0-9]{3} [0-9]{2} [0-9]{2}" required ref={(input) => this._phone = input}/>
                <label htmlFor="birthday">Дата рождения</label>
                <input type="text" id="birthday" placeholder="дд.мм.гггг" pattern="[0-9]{2}\.[0-9]{2}\.[0-9]{4}" required ref={(input) => this._birthday = input}/>
                <label htmlFor="role">Специальность</label>
                <select name="role-name" id="role" required ref={(input) => this._role = input}>
                    <option value="designer">Дизайнер</option>
                    <option value="developer">Разработчик</option>
                    <option value="manager">Контент-менеджер</option>
                </select>
                <label htmlFor="isArchive">В архиве?</label>
                <input type="checkbox" name="status-toggle" value="status" id="isArchive" ref={(input) => this._isArchive = input}/>
                <button type="submit">Сохранить</button>
            </form>
        )
    }
}