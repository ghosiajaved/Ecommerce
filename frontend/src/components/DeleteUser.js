import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/users/${userId}`);
            setMessage(`User deleted: ${response.data.message}`);
            // Clear the message after 3 seconds
            setTimeout(() => {
                setMessage('');
            }, 3000);
        } catch (error) {
            setMessage(`Error deleting user: ${error.response ? error.response.data.error : error.message}`);
            // Clear the message after 3 seconds
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }} style={styles.form}>
                <h2 style={styles.heading}>Delete User</h2>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter user ID"
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Delete User</button>
                {message && <p style={message.includes('Error') ? styles.errorText : styles.successText}>{message}</p>}
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
    },
    form: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '500px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: 'black',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
    },
    successText: {
        color: 'green',
        textAlign: 'center',
        marginTop: '10px',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: '10px',
    },
};

export default DeleteUser;
