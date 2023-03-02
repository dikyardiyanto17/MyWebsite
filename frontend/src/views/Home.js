import { Player } from '@lottiefiles/react-lottie-player';
import person from '../assets/lottiefiles/71367-person.json'
import '../assets/Wrapper1.css'
import '../assets/Wrapper1Anime.css'
import '../assets/Wrapper.css'
import '../assets/Wrapper2.css'
import '../assets/Loading.css'
import MyLogo from '../assets/MyLogo.png'
import AOS from 'aos';
import '../assets/Hovering.css'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from 'react';
export default function Home() {
    const [delayed, setDelayed] = useState(false)
    const onMouse = (e) => {
        console.log(e.target.innerHTML)
        e.target.innerHTML = 'You can call me Diky'
    }
    
    const onMouseOutOver = (e) => {
        console.log(e.target.innerHTML)
        e.target.innerHTML = 'Hi! I am Diky Ardiyanto'
    }

    useEffect(() => {
        AOS.init({duration: 2000});
    })

    if (!delayed) {
        setTimeout(() => {
            setDelayed(true)
        }, 2000)
        return (
            <>
                <div style={{ backgroundColor: '#03001C', overflow: 'hidden', height: '100vh' }}>
                    <div style={{ paddingTop: '100px', marginLeft: '-50%' }} id='loading'>
                        <img src={MyLogo} style={{ width: '20%' }} alt='' />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div style={{ backgroundColor: '#03001C', height: '80vh', paddingTop: '5%', color: '#B6EADA', display: 'flex', flexWrap: 'nowrap', padding: '50px' ,overflow: 'hidden' }}>
                    <div style={{ minHeight: '50vh', width: '50vw', margin: 'auto', textAlign: 'right', paddingRight: '20px', marginTop: '100px' }}>
                        <h1 data-aos="slide-right" onMouseOver={onMouse} onMouseOut={onMouseOutOver} style={{whiteSpace: 'pre'}}>Hi! I am Diky Ardiyanto</h1>
                        <div className='wrapper'>
                            <h2 style={{ fontFamily: 'Montserrat' }} data-aos="slide-right">A <span></span> Developer</h2>
                        </div>
                        <h2 data-aos="slide-right" style={{ fontFamily: 'Montserrat' }} className='textHovering'>Based in Indonesia</h2>
                        <p data-aos="slide-right" style={{ fontFamily: 'Montserrat', fontSize: '17px' }} className='textHovering'>Delving into the depths of programming, weaving captivating tales through my writing, and embarking on thrilling adventures to distant lands—these are the elements that make up my ideal existence.</p>
                    </div>
                    <div data-aos="slide-left" style={{ minHeight: '50vh', width: '50vw', margin: '20px', display: 'flex', alignItems: 'center' }}>
                        <Player
                            autoplay
                            loop
                            src={person}
                        >
                        </Player>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1676191786" style={{ position: 'relative', margin: '0', backgroundColor: '#B6EADA', zIndex: '-1' }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='movinganimation'>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div style={{ backgroundColor: '#B6EADA', height: '80vh', paddingTop: '5%', color: '#B6EADA', display: 'flex', flexWrap: 'nowrap', padding: '50px' }}>
                    <div  style={{ minHeight: '50vh', width: '50vw', margin: '20px', textAlign: 'justify', paddingRight: '20px', color: '#03001C' }}>
                        <h2 data-aos="slide-right" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '25px' }} className='textHovering2'>"Human progress is neither automatic nor inevitable... Every step toward the goal of justice requires sacrifice, suffering, and struggle; the tireless exertions and passionate concern of dedicated individuals."</h2>
                        <h4 data-aos="slide-right" style={{ fontFamily: 'Montserrat' }} className='textHovering3'>- Martin Luther King, Jr.</h4>
                    </div>
                    <div style={{ minHeight: '50vh', width: '50vw', margin: '20px', textAlign: 'center', color: '#03001C', overflow: 'hidden' }}>
                        <h3 data-aos="slide-left" style={{ textAlign: 'justify',  lineHeight: '1.5' }} className='textHovering4'>I am a full-stack developer just starting out in my career. Although I am new to the field, I am eager to learn and grow my skills as a full-stack developer. I am particularly interested in developing applications that are both beautiful and functional.</h3>
                        <h3 data-aos="slide-left" style={{ textAlign: 'justify',  lineHeight: '1.5' }} className='textHovering4'>With a solid skill in JavaScript, I bring a wealth of expertise to the table when it comes to web design. I specialize in utilizing cutting-edge frameworks such as Vue and React, and I have a passion for creating intuitive and engaging mobile applications using React Native. I am always looking to expand my skill set and have recently taken a keen interest in Python programming. In my free time, I am also indulging my love of languages and am currently studying Japanese to deepen my understanding of this rich and fascinating culture.</h3>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1676192244" style={{ position: 'relative', margin: '0', backgroundColor: '#03001C', zIndex: '-1' }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='movinganimation'>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

            </>
        );
    }
}