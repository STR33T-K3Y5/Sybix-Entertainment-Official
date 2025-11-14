import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { featureLists, goodLists } from "../../constants"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Vision = () => {


    useGSAP(() => {

        const maskTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#vision",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: true,
            }
        })

        maskTimeLine
        .to('.will-fade', {
            opacity: 0,
            stagger: 0.2,
            ease: 'power1.inOut'
        })
        .to('.masked-img', {
            scale: 1.3,
            maskPosition: 'center',
            maskSize: '100%',
            duration: 1,
            ease: 'power1.inOut'
        })
        .to('#masked-content', {
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
        })
    })

  return (
    <div id="vision">
        <div className="container mx-auto h-full pt-20 mt-30">

            <div className="content">
                <ul className="space-y-4 will-fade">
                    {goodLists.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <img src="/images/check.png" alt="check"/>
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul> 

                <div className="logo-img">
                    <img src="/images/logo-colour.png" alt="logo" className="abs-center masked-img size-full object-contain"  />
                </div>

                <ul className="space-y-4 will-fade">
                    {featureLists.map((feature, index) => (
                        <li key={index} className="flex items-center justify-start gap-2">
                            <img src="/images/check.png" alt="check"/>
                            <p className="md:w-fit w-100">{feature}</p>
                        </li>
                    ))}
                </ul> 
            </div>

            <div className="masked-container">
                <div id="masked-content">
                    <h3>Empowering Talent</h3>
                    <p>Shaping Culture | Building the Future</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Vision