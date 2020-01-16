import React from 'react';
import styles from './Projects.module.css';
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";
import photoWebSite from "../assets/Photo/projectWebSite.png"
import photoCounter from "../assets/Photo/projectCounter.png"
import photoToDoList from "../assets/Photo/projectToDoList.png"
import Fade from 'react-reveal/Slide';

function Project(props) {
    return (
        <div className={styles.project}>
            <a href={props.project.link}>
                <div className={styles.imageWrapper}>
                    <div className={`${styles.image}`} style={{backgroundImage: `url(${props.project.image})`}}>
                    </div>
                    <div className={styles.button}>
                        Смотреть
                    </div>
                </div>
            </a>
            <h2>{props.project.name}</h2>
            <div className={styles.description}>
                {props.project.description}
            </div>
            {props.project.authorization&&<div>
                Зарегестрируйся по адресу <a href='https://social-network.samuraijs.com/'>social-network.samuraijs.com/</a>,
                чтобы протестировать,
            </div>}
        </div>
    )
}

function Projects() {
    const projects = [
        {
            name: "Web-site",
            image: photoWebSite,
            description: "Социальная сеть. Приводи друзей и весело проводи время. ",
            style: styles.imgWeb,
            link: "https://nikky6666.github.io/Web-site/",
            authorization: true
        },
        {
            name: "To do list",
            image: photoToDoList,
            description: "Todolist — это простой список дел или список задач. Запиши в него все свои важные дела, чтобы не забыть. «Список дел» " +
                "позволит вам эффективно организовать свое рабочее время.",
            style: styles.impTDL,
            link: "https://nikky6666.github.io/toDoList/",
            authorization: true
        },
        {
            name: "Counter",
            image: photoCounter,
            description: "Простой счетчик, в котором вы можете задать свои начальные значения.",
            style: styles.imgCoun,
            link: "https://nikky6666.github.io/Counter/",
            authorization: false
        }
    ];
    const projectsElements = projects.map(p => <Project project={p} />);
    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.container}>
                <HeaderTitle headerName="Проекты" theme="dark"/>
                <Fade bottom>
                    <div className={styles.blockProjects}>
                        {projectsElements}
                    </div>
                </Fade>
            </div>
        </div>

    );
}

export default Projects;
