import React from 'react';
import styles from './Skills.module.css';
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";
import reactPhoto from "../assets/Photo/react.png"
import jsPhoto from "../assets/Photo/js.png"
import htmlCss from "../assets/Photo/htmlCss.png"
import typescript from "../assets/Photo/typescript.png"
import git from "../assets/Photo/git.png"
import Fade from 'react-reveal/Fade';

function Skill(props) {
    return <div className={styles.skill}>
        <div className={`${styles.photo} ${props.style}`}>
            <img src={props.photo} alt=""/>
        </div>
        <h2>{props.name}</h2>
        <div className={styles.description}>
            {props.desctiption}
        </div>
    </div>
}

function Skills() {
    const skills = [
        {
            photo: reactPhoto,
            name: "React",
            description: "React - это декларативная, эффективная и гибкая библиотека JavaScript для создания пользовательских интерфейсов. Одна из главных особенностей React.js - свобода действий, существует огромное количество подходов к построению приложений с его помощью (redux, mobx и другие)." +
                " Они не являются частью собственно React.js, а представляют собой архитектурные надстройки и также постоянно развиваются.",
            style: styles.react
        },
        {
            photo: jsPhoto,
            name: "JS",
            description: "JavaScript® (часто сокращают до JS) — это интерпретируемый язык программирования, разработанный для взаимодействия с веб-страницами. JavaScript запускается на стороне клиента Интернета и используется для программирования того, как веб-страницы будут вести себя при наступлении определенных событий.",
            style: styles.js
        },
        {
            photo: htmlCss,
            name: "HTML + CSS",
            description: "HTML – это язык гипертекстовой разметки страницы, это стандарт разметки страниц для интернета, считывая этот язык браузеры интерпретируют его и отображают уже как сформированный документ." +
                "CSS – это каскадные таблицы стилей, это язык который направлен на описание внешнего вида документа, написанного на языке гипертекстовой разметки то есть html.",
            style: styles.html
        },
        {
            photo: typescript,
            name: "TypeScript",
            description: " TypeScript является строго типизированным, объектно-ориентированным, компилируемым языком программирования. " +
                "TypeScript применяет базовые свойства языка спецификации ECMAScript5, то есть официальной спецификации JavaScript. В настоящее время это — ведущий язык из тех, которые компилируются в JavaScript.",
            style: styles.typescript
        },
        {
            photo: git,
            name: "GIT",
            description: "GIT — это одна из самых известных систем контроля версий с открытым исходным кодом, на которую полагаются миллионы проектов по всем миру (включая как коммерческие, так и бесплатные проекты). " +
                "GIT — это полностью бесплатное программное обеспечение, поддерживающее множество ОС, таких как Mac, Linux, Windows и Solaris. ",
            style: styles.git
        },
    ];

    const blockSkills = skills.map(s => <Skill photo={s.photo} name={s.name} desctiption={s.description}
                                               style={s.style}/>);

    return (
        <div id='skills' className={styles.skills}>
            <div className={styles.container}>
                <Fade bottom>
                <HeaderTitle headerName="Мои навыки" theme="light"/>
                    <div className={styles.blockSkills}>
                        {blockSkills}
                    </div>
                </Fade>
            </div>

        </div>

    );
}

export default Skills;
