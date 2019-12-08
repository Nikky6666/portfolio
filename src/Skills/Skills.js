import React from 'react';
import styles from './Skills.module.css';
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";
import reactPhoto from "../Common/Photo/react.png"
import jsPhoto from "../Common/Photo/js.png"
import htmlCss from "../Common/Photo/htmlCss.png"

function Skill(props) {
    return <div className={styles.skill}>
        <div className={styles.photo}>
            <img src={props.photo}/>
        </div>
        <h2>{props.name}</h2>
        <div className={styles.description}>
            {props.desctiption}
        </div>
    </div>
}

function Skills() {
    const skills = [
        {photo: reactPhoto ,
            name: "React",
            description: "React - это декларативная, эффективная и гибкая библиотека JavaScript для создания пользовательских интерфейсов. Одна из главных особенностей React.js - свобода действий, существует огромное количество подходов к построению приложений с его помощью (redux, mobx и другие)."+
                " Они не являются частью собственно React.js, а представляют собой архитектурные надстройки и также постоянно развиваются."},
        {photo: jsPhoto ,
            name: "JS",
            description: "JavaScript® (часто сокращают до JS) — это интерпретируемый язык программирования, разработанный для взаимодействия с веб-страницами. JavaScript запускается на стороне клиента Интернета и используется для программирования того, как веб-страницы будут вести себя при наступлении определенных событий."},
        {photo: htmlCss ,
            name: "HTML + CSS",
            description: "HTML – это язык гипертекстовой разметки страницы, это стандарт разметки страниц для интернета, считывая этот язык браузеры интерпретируют его и отображают уже как сформированный документ." +
                "CSS – это каскадные таблицы стилей, это язык который направлен на описание внешнего вида документа, написанного на языке гипертекстовой разметки то есть html."},
    ];

    const blockSkills = skills.map(s => <Skill photo={s.photo} name={s.name} desctiption={s.description}/>);

    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <HeaderTitle headerName="Мои скиллы" theme="light"/>
                <div className={styles.blockSkills}>
                    {blockSkills}
                </div>
            </div>
        </div>

    );
}

export default Skills;
