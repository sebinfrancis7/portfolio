import EventNestImage1 from "../assets/images/Eventnest/img-1.webp";
import EventNestImage2 from "../assets/images/Eventnest/img-2.webp";
import EventNestImage3 from "../assets/images/Eventnest/img-3.webp";
import EventNestImage4 from "../assets/images/Eventnest/img-4.webp";
import EventNestImage5 from "../assets/images/Eventnest/img-5.webp";
import EventNestImage6 from "../assets/images/Eventnest/img-6.webp";
import EventNestImage7 from "../assets/images/Eventnest/img-7.webp";

import AttnImage1 from "../assets/images/Attn/img-1.webp";
import AttnImage2 from "../assets/images/Attn/img-2.webp";
import AttnImage3 from "../assets/images/Attn/img-3.webp";

import ToDoImage1 from "../assets/images/ToDo/img-1.webp";
import ToDoImage2 from "../assets/images/ToDo/img-2.webp";
import ToDoImage3 from "../assets/images/ToDo/img-3.webp";
import ToDoImage4 from "../assets/images/ToDo/img-4.webp";
import ToDoImage5 from "../assets/images/ToDo/img-5.webp";

import AbsaImage1 from "../assets/images/absa/img-1.webp";

import FacemaskImage1 from "../assets/images/Facemask/img-1.webp";

const skills = [
	{
		id: 1,
		name: "Data Structure & Algorithms",
		percentage: 70
	},
	{
		id: 2,
		name: "OOPS",
		percentage: 70
	},
	{
		id: 3,
		name: "MERN Stack Development",
		percentage: 60
	},
	{
		id: 4,
		name: "Machine Learning",
		percentage: 50
	},
	{
		id: 5,
		name: "DBMS",
		percentage: 60
	},
	{
		id: 6,
		name: "Data Science",
		percentage: 30
	}
];
const projects = [
	{
		id: 1,
		title: "EventNest",
		images: [
			EventNestImage1,
			EventNestImage2,
			EventNestImage3,
			EventNestImage4,
			EventNestImage5,
			EventNestImage6,
			EventNestImage7
		],
		description:
			"Full Stack Event Management System using MERN stack with Razorpay integration. Separately hosted Nodejs Server for backend and API services.",
		repoLink: "https://github.com/sebinfrancis7/EventNest-frontend",
		demoLink: ""
	},
	{
		id: 2,
		title: "Attendance Management System",
		images: [AttnImage1, AttnImage2, AttnImage3],
		description: "Attendance Management System for Google Meet.",
		repoLink: "https://github.com/sebinfrancis7/rgit_attn_server",
		demoLink: ""
	},
	{
		id: 3,
		title: "To-Do App",
		images: [ToDoImage1, ToDoImage2, ToDoImage3, ToDoImage4, ToDoImage5],
		description:
			"A simple Notes/To-Do app using Flutter and Firebase. Users can add and remove tasks. ",
		repoLink: "https://github.com/sebinfrancis7/To-do-Notes-app",
		demoLink: ""
	},

	{
		id: 4,
		title: "Sentiment Analysis",
		images: [AbsaImage1],
		description:
			"Aspect Based Sentiment Analysis on Youtube video reviews using absa library.",
		repoLink:
			"https://github.com/sebinfrancis7/Aspect_based_Sentiment_Analysis_on_Youtube_Reviews",
		demoLink: ""
	},

	{
		id: 5,
		title: "Facemask Detection",
		images: [FacemaskImage1],
		description:
			"Face mask detection on images in python using keras and tensorflow.",
		repoLink: "https://github.com/sebinfrancis7/Face-mask-detection",
		demoLink: ""
	}
];

export { skills, projects };
