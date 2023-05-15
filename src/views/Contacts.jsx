import { useEffect, useState } from "react";
import Contact from "../components/Contact/Contact";

function Contacts() {
    let [data, setData] = useState([]);
    let [currentFilter, setCurrentFilter] = useState('regular');
    // let data = [];
    // useEffect, useState
    useEffect(() => {
        fetch('/contacts.json')
            .then(res => res.json())
            .then(info => {
                setData(info);
            });
    }, [])

    return <div>
        <h1>Lista de contactos</h1>
        <button onClick={() => setCurrentFilter('regular')}>Regular users</button>
        <button onClick={() => setCurrentFilter('premium')}>Premium users</button>

        {data.map(item => {
            if ((currentFilter === 'regular' && item.premium === false) || (currentFilter === 'premium' && item.premium === true)) {
                return <Contact extraClass={item.premium ? 'background-red' : ''} img={item.img} name={item.name} icon={item.messages[0]}/>
            } else {
                return ''
            }
        })}
    </div>
}

export default Contacts;