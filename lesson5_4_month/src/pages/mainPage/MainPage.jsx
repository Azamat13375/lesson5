import React from 'react';

function MainPage(props) {

    function onClick() {
        console.log("hello world");
    }

    return (
        <div>
            <h2>Обработчики событий</h2>
            <button onClick={onClick}>click</button>
        </div>
    );
}

export default MainPage;