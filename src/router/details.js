import Details from "@/views/Details";
import About from "@/views/Details/About";
import Skills from "@/views/Details/Skills";
import Experiences from "@/views/Details/Experiences";
import Hobbies from "@/views/Details/Hobbies";

export default {
  path: "/details",
  name: "Details",
  component: Details,
  children: [
    {
      path: "about",
      name: "About",
      component: About
    },
    {
      path: "skills",
      name: "Skills",
      component: Skills
    },
    {
      path: "experiences",
      name: "Experiences",
      component: Experiences
    },
    {
      path: "hobbies",
      name: "Hobbies",
      component: Hobbies
    }
  ]
}