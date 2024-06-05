import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "My start in Brainster Next College",
		description:
			"This article highlights my initial experience and the journey of starting at Brainster Next College. It covers the insights gained and the community encountered.",
		keywords: [
			"Brainster Next College",
			"Student Experiences",
			"Higher Education",
			"Tech Education",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					width: 600px;
					height: 200px;
					object-fit: cover;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Brainster Next College has been a transformative
						experience for me. From the very first day, I felt
						welcomed and part of a vibrant community. The college's
						innovative approach to education, focusing on real-world
						skills and project-based learning, has provided me with
						invaluable knowledge and practical experience.
					</div>
					<div className="paragraph">
						The instructors at Brainster Next College are industry
						professionals who bring their expertise into the
						classroom, offering insights that are both relevant and
						inspiring. The collaborative environment encourages us
						to work together, share ideas, and support each other’s
						growth.
					</div>
					<div className="paragraph">
						One of the standout aspects of my journey so far has
						been the emphasis on cloud computing and its benefits.
						Understanding cloud technology has opened up new
						opportunities and has been a critical component of my
						learning.
					</div>
					<img
						src="https://media.next.edu.mk/wp-content/uploads/2022/07/Vladimir-Gelov.jpg"
						alt="Vladimir Gelov"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "5 June 2023",
		title: "Exam at Intertec",
		description:
			"An overview of the recent examination event where Brainster Next College students participated at Intertec, highlighting their experiences and the importance of practical exams in their education.",
		keywords: [
			"Brainster Next College",
			"Intertec Exam",
			"Student Experiences",
			"Practical Exams",
			"Tech Education",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.examImage {
					width: 600px;
					height: 200px;
					object-fit: cover;
					outline: 2px solid red;
					margin-top: 20px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Recently, students from Brainster Next College had the
						opportunity to take an exam at Intertec. This event
						marked a significant milestone in their educational
						journey, providing them with a chance to apply their
						knowledge in a real-world setting.
					</div>
					<div className="paragraph">
						The exam at Intertec was a rigorous assessment designed
						to test the practical and theoretical skills of the
						students. It included various tasks that mirrored
						real-life challenges faced in the tech industry. The
						students' performance was evaluated by industry
						professionals, adding a layer of authenticity and
						professional feedback to the experience.
					</div>
					<div className="paragraph">
						This practical examination is a testament to Brainster
						Next College's commitment to hands-on learning. By
						engaging with industry leaders and participating in
						real-world assessments, students gain invaluable
						insights and experience that prepare them for their
						future careers.
					</div>
					<img
						src="https://media.next.edu.mk/wp-content/uploads/2024/02/DSC_0421-2048x815.jpg"
						alt="Brainster Next College Students at Intertec"
						className="examImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
