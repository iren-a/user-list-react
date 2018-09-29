import React from 'react';

export default class FilterForm extends React.Component {
    _filterHandler() {
        const filterCondition = {
            sortByName: this._sortByName.checked,
            sortByBirthday: this._sortByBirthday.checked,
            role: this._role.value,
            isArchive: this._isArchive.checked
        };
        this.props.filterHandler(filterCondition);
    }

    render() {
        return(
            <form className='filter-form'>
                <div className='filter-form__fieldset'>
                    <label className='filter-form__label' htmlFor="sort-by-name">Сортировать по имени</label>
                    <input type="checkbox" name="sort" id="sort-by-name" ref={(input) => this._sortByName = input}/>
                </div>
                <div className='filter-form__fieldset'>
                    <label className='filter-form__label' htmlFor="sort-by-birthday">Сортировать по дате рождения</label>
                    <input type="checkbox" name="sort" id="sort-by-birthday" ref={(input) => this._sortByBirthday = input}/>
                </div>
                <div className='filter-form__fieldset'>
                    <label className='filter-form__label' htmlFor="role">Специальность</label>
                    <select name="role-name" id="role" required ref={(input) => this._role = input}>
                        <option value="*">Все специальности</option>
                        <option value="designer">Дизайнер</option>
                        <option value="developer">Разработчик</option>
                        <option value="manager">Контент-менеджер</option>
                    </select>
                </div>
                <div className='filter-form__fieldset'>
                    <label className='filter-form__label' htmlFor="is-archive">В архиве?</label>
                    <input type="checkbox" name="status-toggle" value="status" id="is-archive" ref={(input) => this._isArchive = input}/>
                </div>
                <button className='btn' type="button" onClick={this._filterHandler.bind(this)}>Применить</button>
            </form>
        );
    }
}