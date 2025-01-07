import { CardSkill } from '../Cards/CardSkill'
import html from './../assets/iconos/html.webp'
import css from './../assets/iconos/css.webp'
import java from './../assets/iconos/java.webp'
import javaScript from './../assets/iconos/javaScript.webp'
import astro from './../assets/iconos/astro.webp'
import python from './../assets/iconos/python.webp'
import React from './../assets/iconos/React.webp'
import Figma from './../assets/iconos/Figma.webp'
import './Skills.css'
export function Skills() {
    return (
        <section className='skill-container'>
            <h1 className="skill-title">
                <i className="fas fa-code"></i> Mis habilidades
            </h1>
            <div className="containerCard">
                <CardSkill
                    nivel="Intermedio"
                    link={html} />
                <CardSkill
                    nivel="Intermedio"
                    link={css} />
                <CardSkill
                    nivel="Intermedio"
                    link={Figma} />
                <CardSkill
                    nivel="Intermedio"
                    link={astro} />
                <CardSkill
                    nivel="Principiante"
                    link={java} />
                <CardSkill
                    nivel="Principiante"
                    link={python} />
                <CardSkill
                    nivel="Principiante"
                    link={javaScript} />
                <CardSkill
                    nivel="Principiante"
                    link={React} />

            </div>
        </section>
    )
}