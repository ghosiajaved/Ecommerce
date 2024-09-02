/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';

const Categories = () => {
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showCategoryList, setShowCategoryList] = useState(false);
    const [showUpdateCategory, setShowUpdateCategory] = useState(false);
    const [showDeleteCategory, setShowDeleteCategory] = useState(false);

    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (showCategoryList) {
            fetchCategories();
        }
    }, [showCategoryList]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/categories');
            setCategories(response.data);
            setErrorMessage('');
        } catch (error) {
            console.error('Error fetching categories:', error);
            setErrorMessage('Error fetching categories.');
        }
    };

    const handleCategoryCreated = (newCategory) => {
        console.log('Category created:', newCategory);
        fetchCategories(); // Refresh category list after creation
    };

    return (
        <div style={styles.container}>
            <h3>Category Management</h3>
            <button
                onClick={() => {
                    setShowAddCategory(!showAddCategory);
                    setShowCategoryList(false);
                    setShowUpdateCategory(false);
                    setShowDeleteCategory(false);
                }}
                className="btn btn-dark"
            >
                Add Category
            </button>

            <button
                onClick={() => {
                    setShowCategoryList(!showCategoryList);
                    setShowAddCategory(false);
                    setShowUpdateCategory(false);
                    setShowDeleteCategory(false);
                }}
                className="btn btn-dark"
            >
                List Categories
            </button>

            <button
                onClick={() => {
                    setShowUpdateCategory(!showUpdateCategory);
                    setShowAddCategory(false);
                    setShowCategoryList(false);
                    setShowDeleteCategory(false);
                }}
                className="btn btn-dark"
            >
                Update Category
            </button>

            <button
                onClick={() => {
                    setShowDeleteCategory(!showDeleteCategory);
                    setShowAddCategory(false);
                    setShowCategoryList(false);
                    setShowUpdateCategory(false);
                }}
                className="btn btn-dark"
            >
                Delete Category
            </button>

            {showAddCategory && <AddCategory onCategoryCreated={handleCategoryCreated} />}
            {showCategoryList && <CategoryList categories={categories} errorMessage={errorMessage} />}
            {showUpdateCategory && <UpdateCategory />}
            {showDeleteCategory && <DeleteCategory />}
        </div>
    );
};

export default Categories;

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '40px',
    },
};
 */

import React, { useState } from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';

const Categories = () => {
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showCategoryList, setShowCategoryList] = useState(false);
    const [showUpdateCategory, setShowUpdateCategory] = useState(false);
    const [showDeleteCategory, setShowDeleteCategory] = useState(false);

    const handleCategoryCreated = (newCategory) => {
        console.log('Category created:', newCategory);
    };

    return (
        <div style={styles.container}>
            <h3>Category Management</h3>
            <button
                onClick={() => {
                    setShowAddCategory(!showAddCategory);
                    setShowCategoryList(false);
                    setShowUpdateCategory(false);
                    setShowDeleteCategory(false);
                }}
                className="btn btn-dark"
            >
                Add Category
            </button>

            <button
                onClick={() => {
                    setShowCategoryList(!showCategoryList);
                    setShowAddCategory(false);
                    setShowUpdateCategory(false);
                    setShowDeleteCategory(false);
                }}
                className="btn btn-dark"
            >
                List Categories
            </button>

            <button
                onClick={() => {
                    setShowUpdateCategory(!showUpdateCategory);
                    setShowAddCategory(false);
                    setShowCategoryList(false);
                    setShowDeleteCategory(false);
                }}
                className="btn btn-dark"
            >
                Update Category
            </button>

            <button
                onClick={() => {
                    setShowDeleteCategory(!showDeleteCategory);
                    setShowAddCategory(false);
                    setShowCategoryList(false);
                    setShowUpdateCategory(false);
                }}
                className="btn btn-dark"
            >
                Delete Category
            </button>

            {showAddCategory && <AddCategory onCategoryCreated={handleCategoryCreated} />}
            {showCategoryList && <CategoryList />}
            {showUpdateCategory && <UpdateCategory />}
            {showDeleteCategory && <DeleteCategory />}
        </div>
    );
};

export default Categories;

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '40px',
    },
};
