import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isUserFetched, setIsUserFetched] = useState(false);
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/users/${userId}`, userData);
            setSuccessMessage('User updated successfully!');
            setErrorMessage('');
            setIsUserFetched(false);

            setTimeout(() => {
                setFormVisible(false);
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            console.error('There was an error updating the user!', error);
            setErrorMessage('Error updating user.');
        }
    };

    const handleFetchUser = async () => {
        if (!userId) return;

        try {
            const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
            setUserData(response.data);
            setIsUserFetched(true);
            setErrorMessage('');
        } catch (error) {
            console.error('There was an error fetching the user data!', error);
            setErrorMessage('Error fetching user data.');
            setIsUserFetched(false);
        }
    };

    return (
        <div style={styles.container}>
            {formVisible && (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Update User</h2>
                    <input
                        type="text"
                        placeholder="Enter user ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        style={styles.input}
                        required
                    />
                    {!isUserFetched && (
                        <button type="button" onClick={handleFetchUser} style={styles.button}>
                            Search User
                        </button>
                    )}
                    {isUserFetched ? (
                        <>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={userData.username}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={userData.password}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <button type="submit" style={styles.button}>Update User</button>
                        </>
                    ) : (
                        <p style={styles.infoText}>Enter a user ID and click "Search User" to fetch details.</p>
                    )}

                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
            )}
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
    infoText: {
        color: '#888',
        textAlign: 'center',
        marginBottom: '20px',
    },
};

export default UpdateUser;
