import React from 'react';

function NameList({ data, handleChangeName, inputValue }) {
    return (
        <ul>
            {data.map((name, index) => (
                <li key={index}>
                    {name}
                    <button  onClick={() => handleChangeName(index)} disabled={inputValue.trim() === ''}>
                        Поменять
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default NameList;