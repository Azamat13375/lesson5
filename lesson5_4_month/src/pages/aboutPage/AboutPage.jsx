import React from 'react';

function AboutPage(props) {

    function changeText() {
        console.log("changeText");
    }

    return (
        <div>
            <h2>Поля для ввода</h2>
            <input type="text" onClick={changeText}/>
        </div>
    );
}

export default AboutPage;