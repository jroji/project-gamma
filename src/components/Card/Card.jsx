import Button from "../Button/Button";
import './Card.css';

// image / description / buttonText
export default function Card(props) {

    return <article className="card">
        { props.image !== undefined ? <img src={ props.image }></img> : '' }
        { props.tags !== undefined
            ? <div>{props.tags.map(tag => <Button type={tag === 'React' ? 'ternary' : 'primary'}>{tag}</Button>)}</div>
            : ''
    }
        <p>{ props.description }</p>
        { props.children }
    </article>
}