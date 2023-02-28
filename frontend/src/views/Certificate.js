import '../assets/Wrapper1.css'
import '../assets/Wrapper1Anime.css'
import '../assets/Wrapper.css'
import '../assets/Wrapper1Anime.css'
import '../assets/Wrapper2.css'
import Hacktiv8 from '../assets/Diky-Ardiyanto-Hacktiv8/Certificate-Hactkiv8-1.png'
import RumahBahasa1 from '../assets/Diky-Ardiyanto-Sertifikati-Belajar-Bahasa-Jepang-Dasar/Diky Ardiyanto (Sertifikati Belajar Bahasa Jepang Dasar)_page-0001.jpg'
import RumahBahasa2 from '../assets/Diky-Ardiyanto-Sertifikati-Belajar-Bahasa-Jepang-Dasar/Diky Ardiyanto (Sertifikati Belajar Bahasa Jepang Dasar)_page-0002.jpg'
import Daihatsu from '../assets/Diky-Ardiyanto-Sertifikat-Daihatsu-Step/Diky Ardiyanto (Sertifikat Daihatsu Step)_page-0001.jpg'
import '../assets/HoveringMyWorks.css'
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
                        <img src={MyLogo} style={{ width: '20vw' }} alt='' />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div style={{ backgroundColor: '#B6EADA', paddingTop: '5%', color: '#03001C', padding: '10px' }}>
                    <div style={{ margin: 'auto', textAlign: 'Center', marginTop: '50px' }}>
                        <h1 style={{ marginBottom: '20px' }}>Certificate</h1>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right" className='worktitle'>Title</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', marginLeft: '0px' }}>
                                <h2 data-aos="zoom-in-up" className='worktitle'>Full Stack Developer JavaScript</h2>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Institution</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <h2 data-aos="zoom-in-up" className='worktitle'>Hacktiv8</h2>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Issued On</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <h2 data-aos="zoom-in-up" className='worktitle'>13th February 2023</h2>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Certificate</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div data-aos="zoom-in-up">
                                <img className='glekscreenshot' src={Hacktiv8} style={{ width: '20vw', margin: '10px' }} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Description</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', overflow: 'hidden' }}>
                                <p className='descriptiontext' data-aos="zoom-in-up">Hacktiv8 is revolutionizing the world of coding education in Indonesia by transforming novices into proficient, job-ready developers. The immersive bootcamp consists of four comprehensive phases designed to equip students with the skills they need to thrive in the tech industry.
                                    In Phase 0, we delved into the fundamentals of programming and logic using the ubiquitous JavaScript language as our tool of choice. Building on that foundation, in Phase 1 we explored the Model-View-Controller (MVC) pattern and gained practical experience implementing our newly acquired knowledge.
                                    Phase 2 was an exciting journey into the realm of frameworks, including Vue and Bootstrap, where we learned to build complex web applications with ease. In Phase 3, we took our skills to the next level by diving into the React and React Native frameworks, mastering new tools and exploring new frontiers in the ever-evolving world of programming. We culminated our learning journey by designing and implementing a final project, which you can explore in MyWorks (Tynker).</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Skill</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ whiteSpace: 'pre', fontSize: '17px' }}>
                                <p className='descriptiontext' data-aos="zoom-in-up">JavaScript</p>
                                <p className='descriptiontext' data-aos="zoom-in-up">Vue</p>
                                <p className='descriptiontext' data-aos="zoom-in-up">React</p>
                                <p className='descriptiontext' data-aos="zoom-in-up">React Native</p>
                                <p className='descriptiontext' data-aos="zoom-in-up">Microservices</p>
                                <p className='descriptiontext' data-aos="zoom-in-up">Unit Testing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1676192244" style={{ position: 'relative', margin: '0', backgroundColor: '#03001C', zIndex: '-1' }}>
                    <svg className='movinganimation' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div style={{ backgroundColor: '#03001C', paddingTop: '5%', color: '#B6EADA', padding: '10px' }}>
                    <div style={{ margin: 'auto', textAlign: 'Center', marginTop: '50px' }}>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right" className='worktitle'>Title</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', marginLeft: '0px' }}>
                                <h2 data-aos="zoom-in-up" className='worktitle'>General Japanese Level Beginner</h2>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Institution</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <h2 data-aos="zoom-in-up" className='worktitle'>Rumah Bahasa Universal</h2>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Issued On</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <h2 data-aos="zoom-in-up" className='worktitle'>14th March 2016</h2>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Certificate</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div data-aos="zoom-in-up">
                                <img className='glekscreenshot' src={RumahBahasa1} style={{ width: '20vw', margin: '10px' }} alt='' />
                                <img className='glekscreenshot' src={RumahBahasa2} style={{ width: '20vw', margin: '10px' }} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Description</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                <p className='descriptiontext' data-aos="zoom-in-up">At Rumah Bahasa Universal, I learned basic Japanese and gained a deeper appreciation for the language and culture.</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Skill</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ whiteSpace: 'pre', fontSize: '17px' }}>
                                <p className='descriptiontext' data-aos="zoom-in-up">Japanese Language (Basic)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1676191786" style={{ position: 'relative', margin: '0', backgroundColor: '#B6EADA', zIndex: '-1' }} id='movinganimation'>
                    <svg className='movinganimation' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div style={{ backgroundColor: '#B6EADA', paddingTop: '5%', color: '#03001C', padding: '10px' }}>
                    <div style={{ margin: 'auto', textAlign: 'Center', marginTop: '50px' }}>
                        <div className='d-flex col' style={{ textAlign: 'left' }}>
                            <div className='col-3' style={{ marginLeft: '0px' }}>
                                <h2 data-aos="slide-right" className='worktitle'>Title</h2>
                            </div>
                            <div className='col-9' style={{ textAlign: 'left', marginLeft: '0px' }}>
                                <h2 data-aos="zoom-in-up" className='worktitle'>D-STEP (Daihatsu - Service Technical Education Progam)</h2>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Institution</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <h2 data-aos="zoom-in-up" className='worktitle'>Daihatsu</h2>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Issued On</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left', overflow: 'hidden' }}>
                            <h2 data-aos="zoom-in-up" className='worktitle'>24th April 2016</h2>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Certificate</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div data-aos="zoom-in-up">
                                <img className='glekscreenshot' src={Daihatsu} style={{ width: '20vw', margin: '10px' }} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Description</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', overflow: 'hidden' }}>
                                <p className='descriptiontext' data-aos="zoom-in-up">During the assessment, I demonstrated my proficiency in completing regular maintenance checks and achieved a satisfactory level of periodical service at 20,000 KM.</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex col' style={{ textAlign: 'left' }}>
                        <div className='col-3' style={{ marginLeft: '0px' }}>
                            <h2 data-aos="slide-right" className='worktitle'>Skill</h2>
                        </div>
                        <div className='col-9' style={{ textAlign: 'left' }}>
                            <div style={{ whiteSpace: 'pre', fontSize: '17px' }}>
                                <p className='descriptiontext' data-aos="zoom-in-up">Periodical service 20.000 KM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-top-1676192244" style={{ position: 'relative', margin: '0', backgroundColor: '#03001C', zIndex: '-1' }}>
                    <svg className='movinganimation' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

            </>
        );

    }

}