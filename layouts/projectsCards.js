import { Card, Button } from "react-bootstrap";

export default function ProjectCard({ project }) {
  console.log(project, project.image, project.name, project.subtext);
  return (
    <Card>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.subtext}</Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
  );
}
