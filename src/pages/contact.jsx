import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Tertarik? Ayo Kontak Saya
						</div>

						<div className="subtitle contact-subtitle">
							Terimah Kasih Sudah Mengunjungi website Saya 
							Dan perhatian Anda sangat berarti bagi saya. Jika Anda
							memiliki pertanyaan, komentar, atau hanya ingin
							mengobrol, jangan ragu untuk menghubungi saya. Anda
							dapat menghubungi saya melalui email di{"yunusurwah8@gmail.com "}
							<a href="mailto:yunusurwah8@gmail.com">yunusurwah8@gmail.com</a>

							Saya berusaha untuk membalas semua pesan dalam waktu 24 jam, meskipun bisa saja membutuhkan waktu lebih lama saat sedang sibuk. 
							Sebagai alternatif, kamu bisa menggunakan formulir kontak di situs web saya untuk menghubungi saya. Cukup isi kolom yang diperlukan, dan saya akan segera menghubungi kamu. Terakhir, 
							jika kamu lebih suka terhubung melalui media sosial, kamu bisa menemukan saya di..{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							Saya secara rutin membagikan pembaruan dan berinteraksi dengan para pengikut di sana, 
							jadi jangan ragu untuk menghubungi saya.
							 Terima kasih sekali lagi atas ketertarikannya, dan saya menantikan kabar dari kamu

						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
