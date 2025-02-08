import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/Button';
import './AddSuperhero.css';
function AddSuperhero() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humility_score, setHumilityScore] = useState('');
    const addNewSuperhero = async (): Promise<void> => {
        try {
            const response = await fetch('https://ejam-test-production.up.railway.app/api/superheroes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    superpower,
                    humility_score
                }),
            });

            if (!response.ok) {
                console.log(response);
            }
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="add-superhero-wrapper">
            <div className="form-wrapper">
                <h2 className="form-title">Add New Superhero</h2>
                <form className="superhero-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input  onChange={(e) => setName(e.target.value)} type="text" id="name" className="form-input" placeholder="Enter superhero name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="superpower" className="form-label">Superpower</label>
                        <input onChange={(e) => setSuperpower(e.target.value)} type="text" id="superpower" className="form-input" placeholder="Enter superpower" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="humility-score" className="form-label">Humility Score</label>
                        <input onChange={(e) => setHumilityScore(e.target.value)} type="number" id="humility-score" className="form-input" placeholder="Enter humility score" required min="0" max="10" />
                    </div>
                    <Button type="submit" text="Add Superhero" onClick={addNewSuperhero}/>
                </form>
            </div>
        </div>
    )
};

export default AddSuperhero;