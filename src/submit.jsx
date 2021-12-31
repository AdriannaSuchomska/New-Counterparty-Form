import { validNumber } from "./valid.jsx";

const Submit = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://localhost:60001/Contractor/Save', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}

export const handleSubmit = (event) => {
    event.preventDefault();
    validNumber();
    Submit();
}

