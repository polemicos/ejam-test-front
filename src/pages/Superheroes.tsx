import { useEffect, useState } from 'react';
import Superhero from '../components/Superhero';
import '../components/Superhero.css'

interface Superhero {
    id: number;
    name: string;
    superpower: string;
    humility_score: number;
}
function Superheroes() {
    const [loading, setLoading] = useState(false);
    const [superheroes, setSuperheroes] = useState<Superhero[]>([])
    useEffect(() =>{
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch('https://ejam-test-production.up.railway.app/api/superheroes');
                const data: Superhero[] = await response.json();
                setSuperheroes(data);
                setLoading(false);
            }
            catch(error){
                console.log(error);
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div className='superheroes-wrapper'>
            {superheroes.map((superhero) => (
                <Superhero key={superhero.id} {...superhero}/>
            ))}
        </div>
    )
}

export default Superheroes