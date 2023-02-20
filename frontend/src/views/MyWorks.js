import '../assets/Wrapper1.css'
import '../assets/Wrapper1Anime.css'
import '../assets/Wrapper.css'
import '../assets/Wrapper2.css'
import Demo from '../assets/demo-tynker.mp4'
import LogoTynker from '../assets/logo.png'
import Asset1 from '../assets/Tynker/Screenshot_1675913307.png'
import Asset2 from '../assets/Tynker/Screenshot_1675913337.png'
import Asset3 from '../assets/Tynker/ezgif.com-gif-maker.gif'
import Asset4 from '../assets/Tynker/guessing.gif'
import Asset5 from '../assets/Tynker/counting.gif'
import GlekLogo from '../assets/GlekLogo.png'
import Glek1 from '../assets/Glek/Glek1.png'
import Glek2 from '../assets/Glek/Glek2.png'
import Glek3 from '../assets/Glek/Glek3.png'
import Glek4 from '../assets/Glek/Glek4.png'
import Glek5 from '../assets/Glek/Glek5.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import MyLogo from '../assets/MyLogo.png'
import { useEffect, useState } from 'react'
export default function MyWorks() {
    const [delayed, setDelayed] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 2000 });
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
                <div style={{ backgroundColor: '#03001C', paddingTop: '5%', color: '#B6EADA', padding: '10px' }}>
                    <div style={{ margin: 'auto', textAlign: 'Center', marginTop: '50px' }}>
                        <h1 style={{ marginBottom: '20px' }}>My Works</h1>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right">Tynker</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', marginLeft: '0px' }}>
                                <img data-aos="slide-left" src={LogoTynker} style={{ height: '200px' }} alt='' />
                            </div>
                        </div>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right">Screenshot</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                                <div data-aos="slide-left" style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                                    <img src={Asset3} style={{ width: '150px', margin: '10px' }} alt='' />
                                    <img src={Asset4} style={{ width: '150px', margin: '10px' }} alt='' />
                                    <img src={Asset5} style={{ width: '150px', margin: '10px' }} alt='' />
                                    <img src={Asset1} style={{ width: '150px', margin: '10px' }} alt='' />
                                    <img src={Asset2} style={{ width: '150px', margin: '10px' }} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right">Description</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', overflow: 'hidden' }}>
                                    <p data-aos="slide-left">Tynker is an e-learning app for kids that teaches counting, object recognition, and learn basic English using voice recognition would likely include interactive games and exercises that help children practice these skills in a fun and engaging way. The app might use colorful graphics and simple animations to capture children's attention and make learning more enjoyable. Some of the features that the app might include are counting games that help children learn to count numbers, object recognition exercises that help children identify and name different objects, and English language activities that teach basic vocabulary and sentence structure.</p>
                                    <p data-aos="slide-left">Our team of four created this project, and I am the Backend Engineer on the team.</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right">Tech Stack</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                                <p data-aos="slide-left">Frontend: React Native, expo, voice recognition</p>
                                <p data-aos="slide-left">Backend: Express, node js, sequelize, aws, docker, nodemailer, postgreSQL</p>
                            </div>
                        </div>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right">Demo</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                                <iframe data-aos="slide-left" src={Demo} autoPlay='true' style={{ width: '900px', height: '500px' }} title='demo' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-top-1676191786" style={{ position: 'relative', margin: '0', backgroundColor: '#B6EADA', zIndex: '-1' }} id='movinganimation'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div style={{ backgroundColor: '#B6EADA', paddingTop: '5%', color: '#03001C', padding: '10px' }}>
                    <div style={{ margin: 'auto', textAlign: 'Center', marginTop: '50px' }}>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right">GLEK</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', marginLeft: '0px', overflow: 'hidden' }}>
                                <img data-aos="slide-left" src={GlekLogo} style={{ height: '60px' }} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right">Screenshot</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <div data-aos="slide-left" style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                <img src={Glek1} style={{ width: '250px', margin: '10px' }} alt='' />
                                <img src={Glek2} style={{ width: '250px', margin: '10px' }} alt='' />
                                <img src={Glek3} style={{ width: '250px', margin: '10px' }} alt='' />
                                <img src={Glek4} style={{ width: '250px', margin: '10px' }} alt='' />
                                <img src={Glek5} style={{ width: '250px', margin: '10px' }} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right">Description</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', overflow: 'hidden' }}>
                                <p data-aos="slide-left">Glek is a simple web app that tracks your daily water intake. You can easily input your name and the amount of water you drank today. By clicking the 'log' button, the app will increase the bar and display a log of when you drank water. If you've already reached the goal of drinking 8 glasses of water, Glek will surprise you with random fun facts about water before finishing the app.</p>
                                <p data-aos="slide-left">This project was a collaboration among six team members when we were still learning about JavaScript. My role in this project was as a Backend Engineer. Ah, those good old times!</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right">Tech Stack</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <p data-aos="slide-left">NodeJS, HTML & CSS</p>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right">Try It</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left',overflow: 'hidden' }}>
                            <iframe  data-aos="slide-left" src='https://whooptywoo.github.io/hackaton8/' style={{ width: '900px', height: '500px' }} title='glek' />
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-top-1676192244" style={{ position: 'relative', margin: '0', backgroundColor: '#03001C', zIndex: '-1' }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </>
        );

    }

}