import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(SplitText);
const Home = () => {
  const videoRef = useRef(null);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    /* */
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })

    .to('.top-icon', { y: 200}, 0)
    .to('.bottom-icon', { y: -200}, 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? 'top 120%' :'bottom top';

    const tl = gsap.timeline({
      scrollTrigger: {
      trigger: 'video',
      start: startValue,
      end: endValue,
      scrub: true,
      pin: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      })
    }
  }, []);

  return (
    <>
    <section id="home" className="noisy">
      <h1 className='title'>SYBIX</h1>

      <img src='/images/bottom-right.png'
      alt='rock-and-roll-sign'
      className='bottom-icon' />
      
      <img src='/images/top-right.png'
      alt='rock-and-roll-sign'
      className='top-icon' />

      <div className='body'>
        <div className='content'>

          <div className='description'>
            <p className='subtitle'>Sybix Entertainment Group (SEG) is the entertainment and multimedia arm of the Sybix Group of Companies, operating under Sybix Worldwide (SW) in the United States and Sybix Investments (SI) in Zimbabwe. Click below to learn more!</p>
            <a href="#vision">Learn More About Our Vision and Mission</a>
          </div>
          
          <div className='description'>
            <p className='subtitle'>Built on four core divisions, we unite creativity, innovation, and business under one global vision. Each branch empowers a different part of the entertainment world, from content to technology. The future holds even more as we continue expanding into new industries and creative frontiers.</p>
            <a href="#divisions">View Our Divisions</a>
          </div>


        </div>
      </div>
    </section>

    <div className='video absolute inset-0'>
      <video
      ref={videoRef}
        src='/videos/inp.mp4'
        muted
        playsInline
        preload='auto'
      ></video>
    </div>
    
  </>
  )
}

export default Home