import { useFirestore, useFirestoreDocData } from "reactfire";
import { doc } from "firebase/firestore";

export default function Home() {

    const chatReference = doc(useFirestore(), 'grupo-1', '0');
    const { data } = useFirestoreDocData(chatReference);

    console.log(data);

    return <h1>Hola, soy la home</h1>
}