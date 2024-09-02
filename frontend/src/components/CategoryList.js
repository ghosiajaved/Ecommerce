import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/categories/');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    return (
        <div style={styles.categoryList}>
            {categories.length > 0 ? (
                categories.map((category) => (
                    <div key={category.id} style={styles.categoryCard}>
                        <h3 style={styles.categoryName}>Category Name: {category.name}</h3>
                    </div>
                ))
            ) : (
                <p style={styles.noCategories}>No categories available.</p>
            )}
        </div>
    );
};

export default CategoryList;

const styles = {
    categoryList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: '40px',
        backgroundColor: 'white',
    },
    categoryCard: {
        width: '300px',
        border: '1px solid #ccc',
        padding: '20px',
        margin: '10px',
        borderRadius: '10px',
        backgroundColor: '#333',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    categoryName: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    noCategories: {
        fontSize: '1.2rem',
        color: '#777',
    },
};
