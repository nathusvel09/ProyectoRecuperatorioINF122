"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './Perfil.module.css';
function Perfil() {
    const [perfil, setPerfil] = useState("/perfil.jpeg")
    const [github, setGithub] = useState("/github.svg")
    const [linkedin, setlLinkedin] = useState("/linkedin.svg")
    const [twitter, settTwitter] = useState("/twitter.svg")
    const [youtube, setYoutube] = useState("/youtube.svg")

    return (
        <div className={style.contenedor} id="main-content">
            <div class={style.cardIcon}>
                <Image src={perfil} alt="github" width={215} height={215} />
            </div>
            <div class={style.iconText}>
                <h2 class="icon-title">Victor Alvarado</h2>
                <p class="icon-text">Software Enginner</p>
                <div className={style.icons}>
                    <a href="https://github.com">
                        <Image src={github} alt="github" width={36} height={36} />
                    </a>
                    <a href="https://linkedin.com">
                        <Image src={linkedin} alt="linkedin" width={36} height={36} />
                    </a>
                    <a href="https://x.com">
                        <Image src={twitter} alt="twitter" width={36} height={36} />
                    </a>
                    <a href="https://youtube.com">
                        <Image src={youtube} alt="youtube" width={36} height={36} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
