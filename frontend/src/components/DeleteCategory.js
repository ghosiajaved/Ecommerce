import React, { useState } from 'react';
import axios from 'axios';

const DeleteCategory = () => {
    const [categoryId, setCategoryId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDeleteCategory = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/categories/${categoryId}`);
            setSuccessMessage('Category deleted successfully!');
            setErrorMessage('');
            setCategoryId('');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Error deleting category:', error);
            setErrorMessage('Error deleting category.');
        }
    };

    return (
        <div>
            <h4>Delete Category</h4>
            <input
                type="text"
                placeholder="Category ID"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
            />
            <button onClick={handleDeleteCategory} className="btn btn-dark">
                Delete Category
            </button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default DeleteCategory;
