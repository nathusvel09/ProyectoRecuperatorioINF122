"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './Facts.module.css';
function Facts() {
    return (
        <div className={style.contenedor} id="main-content">
            <div className={style.fact}>
                <h2>7</h2>
                <p className="textFact">Years of work experience</p>
            </div>
            <div className={style.fact}>
                <h2>50+</h2>
                <p>Completed projects</p>
            </div>
            <div className={style.fact}>
                <h2>20+</h2>
                <p>Satisfied customers</p>
            </div>
        </div>
    );
}

export default Facts;
