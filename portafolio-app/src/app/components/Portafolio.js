"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from './Portafolio.module.css';

function Portafolio() {
    /*function downloadPDF() {
        const element = document.getElementById('main-content');
        html2pdf().from(element).save('mi_cv.pdf');
    }*/
    const [perfil,setPerfil] = useState("/perfil.jpeg")
    const [github,setGithub] = useState("/github.svg")
    const [linkedin,setlLinkedin] = useState("/linkedin.svg")
    const [twitter,settTwitter] = useState("/twitter.svg")
    const [youtube,setYoutube] = useState("/youtube.svg")

    return (
        <div className={style.contenedor} id="main-content">
            <div className={style.perfil}>
                <div class={style.cardIcon}>
                    <Image src={perfil} alt="github" width={192} height={192}  />
                </div>
                <div class={style.iconText}>
                    <h2 class="icon-title">Nathalie Maya Usnayo Velasco</h2>
                    <p class="icon-text">Super Junior Software Enginner</p>
                    <a href="https://github.com/nathusvel09">
                        <Image src={github} alt="github" width={36} height={36}  />
                    </a>
                    <a href="https://x.com/nathusvel?t=wJREJLQLyHFBI5XzsaZBNg&s=09">
                        <Image src={linkedin} alt="linkedin" width={36} height={36}  />
                    </a>
                    <a href="">
                        <Image src={twitter} alt="twitter" width={36} height={36}  />
                    </a>
                    <a href="https://youtube.com/@nathaliemayausnayovelasco2992?si=xdEACpaP3-g22Ku-">
                        <Image src={youtube} alt="youtube" width={36} height={36}  />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;
