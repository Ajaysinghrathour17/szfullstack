// FormComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const Testing = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/submit', formData);
            alert('Form data submitted successfully');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            alert('Failed to submit form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Testing;
