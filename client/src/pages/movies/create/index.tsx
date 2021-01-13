import React, {useState} from 'react';
import {Movie} from "../Movies";
import {createMovie} from "../api";
import {Button} from "../../../components/Button";

export function CreateMovie() {
    const [formData, setFormData] = useState<Movie>({
        title: '',
        plot: {
            summary: '',
            description: ''
        }
    });

    async function submitMovie() {
        const response = await createMovie(formData)
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
            <input value={formData.plot?.summary} onChange={e => changePlot('summary', e.target.value)} />
            <br />
            Detailed Plot:
            <input value={formData.plot?.description} onChange={e => changePlot('description', e.target.value)} />
            <Button onClick={() => submitMovie()}>Submit</Button>
        </div>
    )
}