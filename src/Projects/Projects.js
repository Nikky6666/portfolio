import React from 'react';
import styles from './Projects.module.css';
import HeaderTitle from "../Common/HeaderTitle/HeaderTitle";
import Button from "../Common/Button/Button";
import photoWebSite from "../Common/Photo/projectWebSite.png"
import photoCounter from "../Common/Photo/projectCounter.png"
import photoToDoList from "../Common/Photo/projectToDoList.png"

function Project(props) {
    const classForImage = props.project.image===photoWebSite ? styles.imgWeb : props.project.image===photoCounter ? styles.imgCoun : styles.impTDL;
    return (
        <div className={styles.project}>
            <div className={`${styles.image} ${classForImage}`}>
                <div className={styles.button}>
                <Button name="Watch" theme="dark"/>
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
        {name: "Web-site", image: photoWebSite, description: "Description"},
        {name: "To do list", image: photoToDoList, description: "Description"},
        {name: "Counter", image: photoCounter, description: "Description"},
    ];
    const projectsElements = projects.map(p => <Project project={p}/>)
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <HeaderTitle headerName="Мои проекты" theme="dark"/>
                <div className={styles.blockProjects}>
                    {projectsElements}
                </div>
            </div>
        </div>

    );
}

export default Projects;
