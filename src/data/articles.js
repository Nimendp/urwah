import React from "react";

function article_1() {
	return {
		date: "24 Maret 2025",
		title: "The Benefits of Cloud Computing",
		description:
			"Komputasi awan (cloud computing) menawarkan berbagai manfaat, termasuk penghematan biaya dan peningkatan fleksibilitas. Cari tahu mengapa semakin banyak bisnis beralih ke teknologi awan.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Artikel 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "6 Februari 2025",
		title: "Artificial Intelligence",
		description:
			"AI sedang merevolusi industri kesehatan, mulai dari meningkatkan hasil perawatan pasien hingga menyederhanakan operasional. Temukan berbagai penerapan terbaru dari teknologi yang mengubah permainan ini.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Artikel 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
