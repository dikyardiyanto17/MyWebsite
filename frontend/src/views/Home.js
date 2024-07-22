import { Player } from "@lottiefiles/react-lottie-player"
import person from "../assets/lottiefiles/71367-person.json"
import "../assets/Wrapper1.css"
import "../assets/Wrapper1Anime.css"
import "../assets/Wrapper.css"
import "../assets/Wrapper2.css"
import "../assets/Loading.css"
import MyLogo from "../assets/MyLogo.png"
import "../assets/css/home.css"
import AOS from "aos"
import "../assets/Hovering.css"
import "aos/dist/aos.css" // You can also use <link> for styles
import { useEffect, useState } from "react"
import MyWorks from "./MyWorks"

export default function Home() {
	const onMouse = (e) => {
		e.target.innerHTML = "You can call me Diky"
	}

	const onMouseOutOver = (e) => {
		e.target.innerHTML = "Hi! I am Diky Ardiyanto"
	}

	useEffect(() => {
		AOS.init({ duration: 2000, offset: 200 })
		window.scrollTo(0, 0)
	})

	return (
		<>
			<div
				className="container-fluid section-page"
				style={{
					backgroundColor: "#03001C",
					minHeight: "80vh",
					paddingTop: "5%",
					color: "#B6EADA",
					display: "flex",
					flexWrap: "nowrap",
					padding: "50px",
					overflow: "hidden",
				}}
			>
				<div className="row d-flex justify-content-center d-flex align-items-center">
					<div className="col-lg-6 col-md-12" style={{ textAlign: "right" }}>
						<h1 data-aos="slide-right" data-aos-once="true" onMouseOver={onMouse} onMouseOut={onMouseOutOver} style={{ whiteSpace: "pre" }}>
							Hi! I am Diky Ardiyanto
						</h1>
						<div className="wrapper">
							<h2 style={{ fontFamily: "Montserrat" }} data-aos="slide-right" data-aos-once="true">
								A <span></span> Developer
							</h2>
						</div>
						<h2 data-aos="slide-right" data-aos-once="true" style={{ fontFamily: "Montserrat" }}>
							Based in Indonesia
						</h2>
						<p data-aos="slide-right" data-aos-once="true" style={{ fontFamily: "Montserrat", fontSize: "17px" }}>
							Delving into the depths of programming, weaving captivating tales through my writing, and embarking on thrilling adventures to distant
							lands—these are the elements that make up my ideal existence.
						</p>
					</div>
					<div className="col-lg-6 col-md-12" data-aos="slide-left" data-aos-once="true">
						<Player autoplay loop src={person}></Player>
					</div>
				</div>
			</div>
			<div
				className="custom-shape-divider-top-1676191786 display-divider"
				style={{ position: "relative", margin: "0", backgroundColor: "#B6EADA", zIndex: "-1" }}
			>
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="movinganimation">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<div
				style={{
					backgroundColor: "#B6EADA",
					height: "80vh",
					paddingTop: "5%",
					color: "#B6EADA",
					display: "flex",
					flexWrap: "nowrap",
					padding: "50px",
				}}
			>
				<div style={{ minHeight: "50vh", width: "50vw", margin: "20px", textAlign: "justify", paddingRight: "20px", color: "#03001C" }}>
					<h2 data-aos="slide-right" data-aos-once="true" style={{ fontFamily: "Montserrat", fontWeight: "bold", fontSize: "25px" }}>
						"Human progress is neither automatic nor inevitable... Every step toward the goal of justice requires sacrifice, suffering, and struggle;
						the tireless exertions and passionate concern of dedicated individuals."
					</h2>
					<h4 data-aos="slide-right" data-aos-once="true" style={{ fontFamily: "Montserrat" }}>
						- Martin Luther King, Jr.
					</h4>
				</div>
				<div style={{ minHeight: "50vh", width: "50vw", margin: "20px", textAlign: "left", color: "#03001C", overflow: "hidden" }}>
					<span data-aos="slide-left" data-aos-once="true" style={{ textAlign: "justify", lineHeight: "1.5", fontSize: "14px" }}>
						With a solid skill in JavaScript, I bring a wealth of expertise to the table when it comes to web design. I specialize in utilizing
						cutting-edge frameworks such as Vue and React, and I have a passion for creating intuitive and engaging mobile applications using React
						Native. Additionally, I have proficiency in HTML and experience in front-end development. I am always looking to expand my skill set and
						have recently taken a keen interest in PHP programming using CodeIgniter 3 (CI3). In my free time, I also indulge my love of languages and
						am currently studying Japanese to deepen my understanding of this rich and fascinating culture.
					</span>
				</div>
			</div>
			<div className="custom-shape-divider-top-1676192244" style={{ position: "relative", margin: "0", backgroundColor: "#03001C", zIndex: "-1" }}>
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="movinganimation">
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					></path>
				</svg>
			</div>
			<MyWorks />
		</>
	)
}
