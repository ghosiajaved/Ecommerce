import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users');
                setUsers(response.data);
                setErrorMessage('');
            } catch (error) {
                console.error('Error fetching users:', error);
                setErrorMessage('Error fetching users.');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div style={styles.container}>
            <h3>User List</h3>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        borderBottom: '2px solid #ddd',
        padding: '8px',
    },
    td: {
        borderBottom: '1px solid #ddd',
        padding: '8px',
    },
};

export default UserList;
