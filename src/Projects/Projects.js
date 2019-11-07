import React from 'react';
import styles from './Projects.module.css';

function Project () {
    return(
        <div className={styles.project}>
            <div>
                <img src="" />
            </div>
                <h2>Project name</h2>
            <div>
                Short description
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>My projects</h2>
                </div>
                <div className={styles.blockProjects}>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>

    );
}

export default Projects;
