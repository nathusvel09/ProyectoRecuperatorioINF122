"use client"
import Image from "next/image";
import { useEffect,useState } from "react";
import style from './TabsContent.module.css';
function TabContent({ image }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    const [ima1, setImg1] = useState("/bussiness_man.png");
    const [ima2, setImg2] = useState("/bussiness_man.png");
    const [ima3, setImg3] = useState("/pictures_wall.jpeg")
    const [ima4, setImg4] = useState("/kitchen.jpeg")
    const [ima5, setImg5] = useState("/mobile_app.png")
    const [ima6, setImg6] = useState("/issima_page.png")
    const [ima7, setImg7] = useState("/vinculante.png")
    return (
        <div className={style.contenedor} id="main-content">
            <div className={style.rectangulo}>
                <div className={style.imagen}>
                    <div className={style.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image src={ima1} alt="github" width={362} height={226}/>
                        {hovered && (
                            <div className={style.iconContainer}>
                                <a href="#">
                                    <Image src={ima7} alt="link" width={24} height={24} />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className={style.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image src={ima2} alt="github" width={362} height={226}/>
                        {hovered && (
                            <div className={style.iconContainer}>
                                <a href="#">
                                    <Image src={ima7} alt="link" width={24} height={24} />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className={style.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image src={ima3} alt="github" width={362} height={226}/>
                        {hovered && (
                            <div className={style.iconContainer}>
                                <a href="#">
                                    <Image src={ima7} alt="link" width={24} height={24} />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className={style.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image src={ima4} alt="github" width={362} height={226}/>
                        {hovered && (
                            <div className={style.iconContainer}>
                                <a href="#">
                                    <Image src={ima7} alt="link" width={24} height={24} />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className={style.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image src={ima5} alt="github" width={362} height={226}/>
                        {hovered && (
                            <div className={style.iconContainer}>
                                <a href="#">
                                    <Image src={ima7} alt="link" width={24} height={24} />
                                </a>
                            </div>
                        )}
                    </div>
                    <div className={style.imageContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Image src={ima6}  className="figure" alt="github" width={362} height={226}/>
                        {hovered && (
                            <div className={style.iconContainer}>
                                <a href="#">
                                    <Image src={ima7} alt="link" width={24} height={24}/>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabContent;
