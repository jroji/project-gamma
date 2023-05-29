import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../public/projects";

export default function Project() {
    const params = useParams();
    const listado = PROJECTS;

    const listadoSeleccionado = listado.find(project => project.id === params.projectId);

    return <>
        <img src={listadoSeleccionado.image} alt={listadoSeleccionado.title} />
        <h1>{listadoSeleccionado.title}</h1>
        { listadoSeleccionado.links.map(link => <a href={link.url}><img src={link.img}></img></a>) }
    </>
}