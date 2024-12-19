import React, { useState } from 'react';
import NameList from "../../components/NameList.jsx";
import style from './NameListPage.module.css';
import * as styles from "react-dom/test-utils";

const NameListPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [names, setNames] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue]);
            setInputValue('');
        }
    };

    const handleChangeName = (index) => {
        if (inputValue.trim() !== '') {
            const updatedNames = names.map((name, i) => (i === index ? inputValue : name));
            setNames(updatedNames);
            setInputValue('');
        }
    };

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleAddName(); }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Введите имя"
                />
                <button type="submit" disabled={inputValue.trim() === ''}>Добавить</button>
            </form>

            {names.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <NameList data={names} handleChangeName={handleChangeName} inputValue={inputValue} />
            )}
        </div>
    );
};

export default NameListPage;