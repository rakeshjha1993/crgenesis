import ProjectCard from "./projectsCards";
import { CardColumns } from "react-bootstrap";

const Projects = [
  {
    id: "1",
    name: "Shaheb Men's Parlour",
    subtext: "Shaheb Men's Parlour",
    image: "/images/salon_2.jpg",
  },
  {
    id: "2",
    name: "Mahindra Spare Parts",
    subtext: "Mahindra Spare Parts",
    image: "/images/mahindra_5.jpg",
  },
  {
    id: "3",
    name: "Mahindra Spare Parts",
    subtext: "Mahindra Spare Parts",
    image: "/images/mahindra_5.jpg",
  },
  {
    id: "4",
    name: "Mahindra Spare Parts",
    subtext: "Mahindra Spare Parts",
    image: "/images/mahindra_5.jpg",
  },
  {
    id: "5",
    name: "Mahindra Spare Parts",
    subtext: "Mahindra Spare Parts",
    image: "/images/mahindra_5.jpg",
  },
  {
    id: "6",
    name: "Mahindra Spare Parts",
    subtext: "Mahindra Spare Parts",
    image: "/images/mahindra_5.jpg",
  },
];

export default function Project() {
  const renderedProjects = Projects.map((project) => {
    return (
      <ProjectCard
        key={`${project.name}_${project.id}`}
        project={project}
      ></ProjectCard>
    );
  });
  return <CardColumns>{renderedProjects}</CardColumns>;
}
