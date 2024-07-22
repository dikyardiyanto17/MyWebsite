import WhatsApp from "../assets/Whatsapp.png"
import Email from "../assets/Email.png"
import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"
import DownloadButton from "../assets/download.png"
import Resume from '../assets/RESUME-DIKY_ARDIYANTO.pdf'
import "../assets/Footbar.css"

export default function Footbar() {
	return (
		<>
			<div className="d-flex justify-content-between align-items-end" style={{ backgroundColor: "#03001C", color: "#B6EADA" }}>
				<div className="copyrighted">
					<p>@copyright - Diky Ardiyanto </p>
				</div>
				<div className="d-flex flex-row-reverse align-items-center">
					<div className="footer-custom">
						<a href={Resume} style={{ textDecoration: "none", color: "#B6EADA" }} download>
							<img src={DownloadButton} className="img-custom" alt="" />
							<span className="hovering2">My Resume</span>
						</a>
					</div>
					<div className="footer-custom">
						<a
							style={{ textDecoration: "none", color: "#B6EADA" }}
							href="https://api.whatsapp.com/send?phone=6285213030871&text=Hi Diky"
							target="_blank"
						>
							<img src={WhatsApp} className="img-custom" alt="" />
							<span>+62 852-1303-0871</span>
						</a>
					</div>
					<div className="footer-custom">
						<a style={{ textDecoration: "none", color: "#B6EADA" }} href="mailto:dikyardiyanto17@gmail.com" target="_blank">
							<img src={Email} className="img-custom" alt="" />
							dikyardiyanto17@gmail.com
						</a>
					</div>
					<div className="footer-custom">
						<a style={{ textDecoration: "none", color: "#B6EADA" }} href="https://github.com/dikyardiyanto17" target="_blank">
							<img src={Github} className="img-custom" alt="" />
							Github
						</a>
					</div>
					<div className="footer-custom">
						<a style={{ textDecoration: "none", color: "#B6EADA" }} href="https://www.linkedin.com/in/diky/" target="_blank">
							<img src={Linkedin} className="img-custom" alt="" />
							Linkedin
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
