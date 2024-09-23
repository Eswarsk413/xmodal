import React, { useState } from 'react';
import './XModal.css';

const XModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, phone, dob } = formData;

        // Validation
        if (!username) {
            alert("Please fill out the Username field.");
            return;
        }
        if (!email.includes('@')) {
            alert("Invalid email. Please check your email address.");
            return;
        }
        if (phone.length !== 10 || isNaN(phone)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }
        if (new Date(dob) > new Date()) {
            alert("Invalid date of birth. Please enter a valid past date.");
            return;
        }

        // Close the modal and reset form
        setIsOpen(false);
        setFormData({ username: '', email: '', phone: '', dob: '' });
    };

    const closeModal = (e) => {
        if (e.target.className === 'modal') {
            setIsOpen(false);
        }
    };

    return (
        <div className="container">
            <h1>User Detail Modal</h1>
            <button onClick={() => setIsOpen(true)} className="open-button">Open Form</button>
            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <h2 className="modal-title">Fill Details</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            
                            <label htmlFor="phone">Phone:</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                            
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default XModal;
