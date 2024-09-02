import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = ({ onCategoryCreated }) => {
    const [categoryName, setCategoryName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/categories', { name: categoryName });
            onCategoryCreated(response.data); // Notify parent component of new category
            setCategoryName('');
            setErrorMessage('');
            setSuccessMessage('Category created successfully!'); // Set success message
        } catch (error) {
            console.error('Error creating category:', error);
            setErrorMessage('Error creating category.');
            setSuccessMessage(''); // Clear success message in case of error
        }
    };

    return (
        <div>
            <h4>Add New Category</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    required
                />
                <button type="submit" className="btn btn-dark">Add Category</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Success message */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Error message */}
        </div>
    );
};

export default AddCategory;
