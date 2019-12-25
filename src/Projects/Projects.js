import React from 'react';
import styles from './Projects.module.css';
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";
import Button from "../Common/Button/Button";
import photoWebSite from "../assets/Photo/projectWebSite.png"
import photoCounter from "../assets/Photo/projectCounter.png"
import photoToDoList from "../assets/Photo/projectToDoList.png"

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={`${styles.image}`} style={{backgroundImage: `url(${props.project.image})`}}>
                <div className={styles.button}>
                <Button name="Смотреть" theme="light"/>
                </div>
            </div>
            <h2>{props.project.name}</h2>
            <div className={styles.description}>
                {props.project.description}
            </div>
        </div>
    )
}

function Projects() {
    const projects = [
        {name: "Web-site", image: photoWebSite, description: "Description", style: styles.imgWeb},
        {name: "To do list", image: photoToDoList, description: "Description", style: styles.impTDL},
        {name: "Counter", image: photoCounter, description: "Description", style: styles.imgCoun},
    ];
    const projectsElements = projects.map(p => <Project project={p}/>)
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <HeaderTitle headerName="Проекты" theme="dark"/>
                <div className={styles.blockProjects}>
                    {projectsElements}
                </div>
            </div>
        </div>

    );
}

export default Projects;
