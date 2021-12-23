import EventNestImage1 from "../assets/images/Eventnest/img-1.png";
import EventNestImage2 from "../assets/images/Eventnest/img-2.png";
import EventNestImage3 from "../assets/images/Eventnest/img-3.png";
import EventNestImage4 from "../assets/images/Eventnest/img-4.png";
import EventNestImage5 from "../assets/images/Eventnest/img-5.png";
import EventNestImage6 from "../assets/images/Eventnest/img-6.png";
import EventNestImage7 from "../assets/images/Eventnest/img-7.png";

import AttnImage1 from "../assets/images/Attn/img-1.png";
import AttnImage2 from "../assets/images/Attn/img-2.png";
import AttnImage3 from "../assets/images/Attn/img-3.png";

import ToDoImage1 from "../assets/images/ToDo/img-1.jpeg";
import ToDoImage2 from "../assets/images/ToDo/img-2.jpeg";
import ToDoImage3 from "../assets/images/ToDo/img-3.jpeg";
import ToDoImage4 from "../assets/images/ToDo/img-4.jpeg";
import ToDoImage5 from "../assets/images/ToDo/img-5.jpeg";

const skills = [];
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
        description: "Full Stack Event Management System using MERN stack with Razorpay integration. Separately hosted Nodejs Server for backend and API services",
        repoLink: "https://github.com/sebinfrancis7/EventNest-frontend",
        demoLink: "https://sebinfrancis7.github.io/EventNest-frontend/"
    },
    {
        id: 2,
        title: "Attendance Management System",
        images: [
            AttnImage1,
            AttnImage2,
            AttnImage3
        ],
        description: "Attendance Management System for RGIT college",
        repoLink: "https://github.com/sebinfrancis7/rgit_attn_server",
        demoLink: "https://attn-server.herokuapp.com/users/login"
    },
    {
        id: 3,
        title: "To-Do App",
        images: [
            ToDoImage1,
            ToDoImage2,
            ToDoImage3,
            ToDoImage4,
            ToDoImage5
        ],
        description: "A simple Notes/To-Do app in flutter with Firebase Authentication. Users and add and remove tasks. ",
        repoLink: "https://github.com/sebinfrancis7/To-do-Notes-app",
        demoLink: "#projects"
    },

    // {
    //     id: 4,
    //     title: "",
    //     images: [

    //     ],
    //     description: "",
    //     repoLink: "",
    //     demoLink: ""
    // }
];

export { skills, projects };