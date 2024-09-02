import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCategory = () => {
    const [categoryId, setCategoryId] = useState('');
    const [categoryData, setCategoryData] = useState({ name: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isCategoryFetched, setIsCategoryFetched] = useState(false);
    const [formVisible, setFormVisible] = useState(true);

    useEffect(() => {
        if (categoryId) {
            const fetchCategoryData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/categories/${categoryId}`);
                    setCategoryData(response.data);
                    setIsCategoryFetched(true);
                    setErrorMessage('');
                } catch (error) {
                    console.error('Error fetching category data!', error);
                    setErrorMessage('Error fetching category data.');
                    setIsCategoryFetched(false);
                }
            };
            fetchCategoryData();
        }
    }, [categoryId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/categories/${categoryId}`, categoryData);
            setSuccessMessage('Category updated successfully!');
            setErrorMessage('');
            setIsCategoryFetched(false);

            // Hide form and success message after 5 seconds
            setTimeout(() => {
                setFormVisible(false);
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            console.error('Error updating category!', error);
            setErrorMessage('Error updating category.');
        }
    };

    return (
        <div style={styles.container}>
            {formVisible && (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Update Category</h2>
                    <input
                        type="text"
                        placeholder="Enter Category ID"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        style={styles.input}
                        required
                    />
                    {isCategoryFetched ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                placeholder="Category Name"
                                value={categoryData.name}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <button type="submit" style={styles.button}>Update Category</button>
                        </>
                    ) : (
                        <p style={styles.infoText}>Enter a category ID to fetch and update details.</p>
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

export default UpdateCategory;
