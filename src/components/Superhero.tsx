import './Superhero.css';
interface SuperheroProps {
    id: number;
    name: string;
    superpower: string;
    humility_score: number;
}

function Superhero({ name, superpower, humility_score }: SuperheroProps) {
    return (
        <div className="card">
            <div className="left-column">
                <h2 className="humility-score">{humility_score}</h2>
            </div>
            <div className="right-column">
                <h3 className="superhero-name">{name}</h3>
                <p className="superpower">{superpower}</p>
            </div>
        </div>
    );
}

export default Superhero;
