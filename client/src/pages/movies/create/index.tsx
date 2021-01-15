import React, {useState} from 'react';
import {Movie} from "../Movie";
import {createMovie} from "../api";
import {useHistory} from 'react-router-dom';

export function CreateMovie() {
    const [formData, setFormData] = useState<Movie>({
        title: '',
        plot: {
            summary: '',
            description: ''
        }
    });

    const history = useHistory();

    async function submitMovie() {
        const response = await createMovie(formData)
        history.push('/movies')
    }

    function changeTitle(title: string) {
        setFormData({...formData, title})
    }

    function changePlot(prop: 'summary' | 'description', value: string) {
        setFormData({
            ...formData,
            plot: {
                ...formData.plot,
                [prop]: value
            }
        })
    }

    return (
        <div>
            Movie:
            <input value={formData.title} onChange={e => changeTitle(e.target.value)} />
            <br />
            Brief Summary:
            <textarea value={formData.plot?.summary} onChange={e => changePlot('summary', e.target.value)} />
            <br />
            Detailed Plot:
            <textarea value={formData.plot?.description} onChange={e => changePlot('description', e.target.value)} />
            <button onClick={() => submitMovie()}>Submit</button>
        </div>
    )
}