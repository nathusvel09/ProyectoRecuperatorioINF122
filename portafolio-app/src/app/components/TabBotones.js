"use client"
import Image from "next/image";
import style from './TabBotones.module.css';
function PerfilBtn() {
    return (
        <div className={style.contenedor} id="main-content">
                <div className={style.rectangulo2}>
                    <h2 className={style.portafolio}>Portafolio</h2>
                </div>
                <div className={style.text}>
                    <p className={style.skills}>Skills</p>
                </div>
            
        </div>
    );
}

export default PerfilBtn;
