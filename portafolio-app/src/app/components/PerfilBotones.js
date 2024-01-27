"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './PerfilBotones.module.css';
function PerfilBtn() {
    const [descargas,setDescargas]=useState("/descargas.png");
    const handleContactMe = () => {
        window.location.href = "mailto:contact@me.com"; // Redirige al cliente de correo electrónico predeterminado con la dirección de correo electrónico proporcionada
    };
    return (
        <div className={style.contenedor} id="main-content">
            <button className={style.btncv}><h2>Download CV<Image src={descargas} alt="github" width={26} height={24} /></h2></button>
            <button className={style.btncm} onClick={handleContactMe}><h2>Contact me</h2></button>
        </div>
    );
}

export default PerfilBtn;
