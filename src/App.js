import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from 'react-particles-js';


const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        shape: {
            type: "star",
        },
        size: {
            value: 15.1,
            anim: { /* анимация изменения размера частиц */
                "enable": true, /* включено/выключено */
                "speed": 30, /* скорость анимации */
                "size_min": 0.1, /* минимальный размер частицы */
                "sync": false /* анимация для всех частиц происходит синхронно или нет */
            }
        },
        line_linked: { /* связующие линии */
            "enable": true, /* включено/выключено */
            "distance": 130, /* расстояние между частицами, при котором проявляется линия */
            "color": "#ffffff", /* цвет */
            "opacity": 0.3, /* прозрачность */
            "width": 2 /* ширина */
        },
    },
        interactivity: { /* интерактивность */
            "detect_on": "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
             /* события */
               events: {
                   "onhover": { /* по наведению */
                       "enable": true, /* включено/выключено */
                       "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
                   },
                   "onclick": { /* по клику */
                       "enable": true, /* включено/выключено */
                       "mode": "push" /* push (добавление новых частиц), remove (удаление частиц),
                     bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
                   }
               },

            "modes": { /* параметры видов событий */
                "bubble": { /* при onhover или onclick: mode: bubble */
                    "distance": 100, /* расстояние от мышки до частиц, при котором происходит эффект */
                    "size": 40, /* размер увеличения частиц */
                    "duration": 2, /* продолжительность эффекта в секундах при клике */
                    "opacity": 0.2, /* максимальная прозрачность */
                    "speed": 3 /* скорость эффекта */
                },
                "repulse": { /* при onhover или onclick: mode: repulse */
                    "distance": 150, /* расстояние отталкивания */
                    "duration": 1 /* продолжительность отталкивания */
                },
                "push": { /* при onclick: mode: push */
                    "particles_nb": 4 /* количество добавляемых частиц */
                },
            }

        },
        opacity: {
            value: 0.1
        }
};

function App() {
    return (
        <div className="App">
                <Particles className="particles" params={particlesOpt}/>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
    );
}

export default App;
