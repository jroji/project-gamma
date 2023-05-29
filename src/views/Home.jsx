import { Link } from "react-router-dom";
import { PROJECTS } from "../../public/projects";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Fade from 'react-reveal/Fade';

export default function Home() {
    const listado = PROJECTS;

    return <>
    {listado.map(proyecto => <Fade>
      <Card
        featured={proyecto.featured}
        image={proyecto.image}
        description={proyecto.title}
        tags={proyecto.technologies}
      >
        {/* {proyecto.links.map(link => <Button type="secondary">{ link.name }</Button>)} */}
        <Link to={ '/projects/' + proyecto.id}>
          <Button type="secondary">+ Info</Button>
        </Link>
      </Card></Fade>)}

    <Card description="Añadir nuevo proyecto">
      <Button type="secondary">Añadir</Button>
    </Card>
    </>
}