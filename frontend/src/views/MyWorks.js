import "../assets/Wrapper1.css"
import "../assets/Wrapper1Anime.css"
import "../assets/Wrapper.css"
import "../assets/Wrapper2.css"
import Demo from "../assets/demo-tynker.mp4"
import LogoTynker from "../assets/logo.png"
import Asset1 from "../assets/Tynker/Screenshot_1675913307.png"
import Asset2 from "../assets/Tynker/Screenshot_1675913337.png"
import Asset3 from "../assets/Tynker/ezgif.com-gif-maker.gif"
import Asset4 from "../assets/Tynker/guessing.gif"
import Asset5 from "../assets/Tynker/counting.gif"
import T1 from "../assets/Telepati/T1.png"
import T2 from "../assets/Telepati/T2.png"
import T3 from "../assets/Telepati/T3.png"
import T4 from "../assets/Telepati/T4.png"
import T5 from "../assets/Telepati/T5.png"
import T6 from "../assets/Telepati/T6.png"
import TA1 from "../assets/Telepati/Telepati Android (1).jpg"
import TA2 from "../assets/Telepati/Telepati Android (2).jpg"
import TA3 from "../assets/Telepati/Telepati Android (3).jpg"
import TA4 from "../assets/Telepati/Telepati Android (4).jpg"
import TA5 from "../assets/Telepati/Telepati Android (5).jpg"
import TA6 from "../assets/Telepati/Telepati Android (6).jpg"
import TA7 from "../assets/Telepati/Telepati Android (7).jpg"
import TA8 from "../assets/Telepati/Telepati Android (8).jpg"
import TA9 from "../assets/Telepati/Telepati Android (9).jpg"
import TA10 from "../assets/Telepati/Telepati Android (10).jpg"
import "../assets/HoveringMyWorks.css"
import GKILogo from "../assets/GKI/GKI Logo.svg"
import GKI1 from "../assets/GKI/GKI.png"
import GKI2 from "../assets/GKI/GKI 2.png"
import GKI3 from "../assets/GKI/GKI 3.png"
import GKI4 from "../assets/GKI/GKI 4.png"
import GKI5 from "../assets/GKI/GKI 5.png"
import GKI6 from "../assets/GKI/GKI 6.png"
import GKI7 from "../assets/GKI/GKI 7.png"
import GKI8 from "../assets/GKI/GKI 8.png"
import GKI9 from "../assets/GKI/GKI 9.png"
import GKI10 from "../assets/GKI/GKI 10.png"
import GKI11 from "../assets/GKI/GKI 11.png"
import GKI12 from "../assets/GKI/GKI 12.png"
import GKI13 from "../assets/GKI/GKI 13.png"
import GKI14 from "../assets/GKI/GKI 14.png"
import AOS from "aos"
import "aos/dist/aos.css"
import MyLogo from "../assets/MyLogo.png"
import { useEffect, useState } from "react"
import Telepati from "../assets/Telepati/favicon.png"
export default function MyWorks() {
	const limeColor = "#B6EADA"
	const darkBlueColor = "#03001C"
	const shapeDividerLime = "custom-shape-divider-top-1676191786"
	const shapeDividerDarkBlue = "custom-shape-divider-top-1676192244"
	// const darkBlueColor = "#B6EADA"
	// const limeColor = "#03001C"
	return (
		<>
			<div style={{ backgroundColor: darkBlueColor, paddingTop: "5%", color: limeColor, padding: "10px" }}>
				<div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
					<h1 style={{ marginBottom: "20px" }}>My Recent Works</h1>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-up" data-aos-once="true">
								Telepati
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
							<img data-aos="fade-down" data-aos-once="true" src={Telepati} style={{ height: "10vw" }} alt="" />
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-up" data-aos-once="true">
								Screenshot
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div data-aos="fade-down" data-aos-once="true">
								<img src={T1} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={T2} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={T3} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={T4} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={T5} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={T6} style={{ width: "15vw", margin: "10px" }} alt="" />
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-up" data-aos-once="true">
								Description
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
								<p data-aos="fade-down" data-aos-once="true">
									Telepati offers free conference meetings using a VPS server with one core. It provides free conference meetings with a Google login
									option. When you join the room, you will be redirected to the lobby and can choose to join the room using a Google account or not.
									The first user who joins the room will become the admin, with the ability to mute all participants in the room. It includes features
									such as turning on/off the camera, switching cameras, muting the microphone, muting all participants for the admin, chat
									functionality, screen sharing, copying the room URL, recording, and a real-time voice recognizer feature. Additionally, Telepati is
									designed with a responsive layout that ensures a seamless experience on Android phones, making it convenient to join and manage
									meetings on mobile devices.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-up" data-aos-once="true">
								Tech Stack
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<p data-aos="fade-down" data-aos-once="true">
								NodeJS, Express JS, GoogleAuth, Socket.IO, Bootstrap, Mediasoup, 3rd API
							</p>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-up" data-aos-once="true">
								Try It
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<iframe
								data-aos="fade-down"
								data-aos-once="true"
								src="https://meet.dikyardiyanto.tech"
								style={{ width: "65vw", height: "80vh" }}
								title="Telepati"
							/>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-up" data-aos-once="true">
								Link To Demo
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
								<a
									className="descriptiontext"
									data-aos="fade-down"
									data-aos-once="true"
									style={{ textDecoration: "none", color: limeColor }}
									href="https://meet.dikyardiyanto.tech"
									target="_blank"
								>
									Click For Demo
								</a>
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Detail
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<a
								data-aos="fade-down"
								data-aos-offset="300"
								href="https://drive.google.com/drive/folders/1r0PHfrFXxEqDE6z5ntTjwDsgjJfhhzjr?usp=drive_link"
								target="_blank"
								style={{ textDecoration: "none", color: limeColor }}
							>
								Click For More Detail
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={shapeDividerLime} style={{ position: "relative", margin: "0", backgroundColor: limeColor, zIndex: "-1" }} id="movinganimation">
				<svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<div style={{ backgroundColor: limeColor, paddingTop: "5%", color: darkBlueColor, padding: "10px" }}>
				<div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-left" data-aos-offset="300" data-aos-once="true">
								GKI Kayu Putih
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
							<img data-aos="flip-right" data-aos-offset="300" data-aos-once="true" src={GKILogo} style={{ height: "10vw" }} alt="" />
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-left" data-aos-offset="300" data-aos-once="true">
								Screenshot
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div data-aos="flip-right" data-aos-offset="300" data-aos-once="true">
								<img src={GKI3} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI4} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI5} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI1} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI2} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI6} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI7} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI8} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI9} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI10} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI11} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI12} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI13} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={GKI14} style={{ width: "15vw", margin: "10px" }} alt="" />
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-left" data-aos-offset="300" data-aos-once="true">
								Description
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
								<p data-aos="flip-right" data-aos-offset="300" data-aos-once="true">
									I developed the GKI Kayu Putih project, an administrative system for the superadmin role. This system encompasses several key
									functionalities including event creation, member management, family registration, comprehensive reporting, and data export. Built
									using PHP and CodeIgniter 3 (CI3) with Mysql as database, the platform allows the superadmin to efficiently manage and organize
									church activities. The event creation module enables scheduling and managing church events with ease. The member management feature
									handles individual and family registrations, maintaining a detailed database of all members. The reporting functionality provides
									insightful data analytics and reporting capabilities, facilitating informed decision-making. Additionally, the system supports
									exporting data in PDF format for records and administrative purposes.
								</p>
								<p data-aos="flip-right" data-aos-offset="300" data-aos-once="true">
									Our team of four created this project, and I am the Backend Engineer and Frontend Engineer on the team.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-left" data-aos-offset="300" data-aos-once="true">
								Tech Stack
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<p data-aos="flip-right" data-aos-offset="300" data-aos-once="true">
								CI 3, PHP, Bootstrap and Mysql
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className={shapeDividerDarkBlue}
				style={{ position: "relative", margin: "0", backgroundColor: darkBlueColor, zIndex: "-1" }}
				id="movinganimation"
			>
				<svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<div style={{ backgroundColor: darkBlueColor, paddingTop: "5%", color: limeColor, padding: "10px" }}>
				<div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Telepati Android
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
							<img data-aos="flip-down" data-aos-offset="300" data-aos-once="true" src={Telepati} style={{ height: "10vw" }} alt="" />
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Screenshot
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div data-aos="flip-down" data-aos-offset="300" data-aos-once="true">
								<img src={TA1} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA2} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA3} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA4} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA5} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA6} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA7} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA8} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA9} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={TA10} style={{ width: "15vw", margin: "10px" }} alt="" />
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Description
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
								<p data-aos="flip-down" data-aos-offset="300" data-aos-once="true">
									I have developed an Android app for Telepati. The Android app offers the same core features as the web version, including turning
									on/off the camera, switching cameras, muting the microphone, chat functionality, screen sharing, and copying the room URL. However,
									the Android app does not include the recording or admin functions, providing a streamlined experience for mobile users.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Tech Stack
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<p data-aos="flip-down" data-aos-offset="300" data-aos-once="true">
								React Native, NodeJS, Socket.IO, Bootstrap, Mediasoup, 3rd API
							</p>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Download
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<a
								data-aos="flip-down"
								data-aos-offset="300"
								href="https://drive.google.com/file/d/1uN1nWFWCBKUq9tYtGhDeQAAsH5xeASbl/view?usp=drive_link"
								target="_blank"
								style={{ textDecoration: "none", color: limeColor }}
							>
								Download The APK
							</a>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="flip-up" data-aos-offset="300" data-aos-once="true">
								Detail
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<a
								data-aos="flip-down"
								data-aos-offset="300"
								href="https://drive.google.com/drive/folders/1r0PHfrFXxEqDE6z5ntTjwDsgjJfhhzjr?usp=drive_link"
								target="_blank"
								style={{ textDecoration: "none", color: limeColor }}
							>
								Click For More Detail
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={shapeDividerLime} style={{ position: "relative", margin: "0", backgroundColor: limeColor, zIndex: "-1" }} id="movinganimation">
				<svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<div style={{ backgroundColor: limeColor, paddingTop: "5%", color: darkBlueColor, padding: "10px" }}>
				<div style={{ margin: "auto", textAlign: "Center", marginTop: "50px" }}>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-down-right" data-aos-once="true">
								Tynker
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", marginLeft: "0px" }}>
							<img data-aos="fade-down-left" data-aos-once="true" src={LogoTynker} style={{ height: "10vw" }} alt="" />
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-down-right" data-aos-once="true">
								Screenshot
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div data-aos="fade-down-left" data-aos-once="true">
								<img src={Asset3} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={Asset4} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={Asset5} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={Asset1} style={{ width: "15vw", margin: "10px" }} alt="" />
								<img src={Asset2} style={{ width: "15vw", margin: "10px" }} alt="" />
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-down-right" data-aos-once="true">
								Description
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
								<p data-aos="fade-down-left" data-aos-once="true">
									Tynker is an e-learning app for kids that teaches counting, object recognition, and learn basic English using voice recognition
									would likely include interactive games and exercises that help children practice these skills in a fun and engaging way. The app
									might use colorful graphics and simple animations to capture children's attention and make learning more enjoyable. Some of the
									features that the app might include are counting games that help children learn to count numbers, object recognition exercises that
									help children identify and name different objects, and English language activities that teach basic vocabulary and sentence
									structure.
								</p>
								<p data-aos="fade-down-left" data-aos-once="true">
									Our team of four created this project, and I am the Backend Engineer on the team.
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-down-right" data-aos-once="true">
								Tech Stack
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<p data-aos="fade-down-left" data-aos-once="true">
								Frontend: React Native, Expo, Voice recognition, Redux
							</p>
							<p data-aos="fade-down-left" data-aos-once="true">
								Backend: Express, NodeJS, Sequelize, AWS EC2, Docker, Nodemailer, PostgreSQL, Json Web Token, Bcryptjs, Ioredis, Jest, Supertest
							</p>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-down-right" data-aos-once="true">
								Demo
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left", overflow: "hidden" }}>
							<video style={{ width: "65vw", height: "80vh" }} controls>
								<source src={Demo} type="video/mp4" />
							</video>
						</div>
					</div>
					<div className="d-flex col" style={{ textAlign: "left" }}>
						<div className="col-3" style={{ marginLeft: "0px" }}>
							<h2 data-aos="fade-down-right" data-aos-once="true">
								Repository
							</h2>
						</div>
						<div className="col-9" style={{ textAlign: "left" }}>
							<div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
								<a
									className="descriptiontext"
									data-aos="fade-down-left"
									data-aos-once="true"
									style={{ textDecoration: "none", color: darkBlueColor }}
									href="https://github.com/Tynker-eustoma"
									target="_blank"
								>
									Github
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={shapeDividerDarkBlue}
				style={{ position: "relative", margin: "0", backgroundColor: darkBlueColor, zIndex: "-1" }}
				id="movinganimation"
			>
				<svg className="movinganimation" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
		</>
	)
}
