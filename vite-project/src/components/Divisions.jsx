'use client';
import gsap  from "gsap";
import { useRef, useState } from "react";
import { divisions } from "../../constants/index.js"
import { useGSAP } from "@gsap/react";



const Divisions = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
            xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        });
        gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 1, ease: 'power1.inOut'
        });
        gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        });
    }, [currentIndex]);

    const totalDivisions = divisions.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalDivisions) % totalDivisions;

        setCurrentIndex(newIndex);
    }


    const getCocktailAt = (indexOffset) => {
        return divisions[(currentIndex + indexOffset + totalDivisions) % totalDivisions];
    }

    const currentDivision = getCocktailAt(0);
    const previousDivision = getCocktailAt(-1);
    const nextDivision = getCocktailAt(1);

  return (
    <section id="divisions" aria-labelledby="menu-heading">

        <h2 id="menu-heading" className="sr-only">
            Our Divisions
        </h2>

        <nav className="division-tabs" aria-label="Division Navigation">
            {divisions.map((division, index) => {
                const isActive = index === currentIndex;
                return (
                    <button key={division.id} className={
                        isActive ? 
                        'text-white border-white' : 
                        'text-white/50 border-white/50'}
                        onClick={() => goToSlide(index)}
                        >
                        {division.name}
                    </button>
                )
            })}
        </nav>

        <div className="content">
            <div className="arrows">
                <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                    <span>{previousDivision.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
                </button>
                
                <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                    <span>{nextDivision.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"/>
                </button>
            </div>

            <div className="cocktail">
                <img src={currentDivision.image} className="object-containi" />
            </div>

            <div className="recipe">
                <div ref={contentRef}>
                    <p>SEG Division:</p>
                    <p id="title">{currentDivision.name}</p>
                </div>

                <div className="details">
                    <h2>{currentDivision.title}</h2>
                    <p>{currentDivision.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Divisions