import { useRef, useEffect } from 'react'
import gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { navLinks } from '../../constants/index.js'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: 'bottom top',
      }
    })

    navTween.fromTo(
      navRef.current,
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    )
  }, [])

  return (
    <nav ref={navRef}>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" className='w-20 h-10' alt="logo" />
          <p className="text-xs sm:text-sm md:text-xl">Sybix Entertainment Group</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
