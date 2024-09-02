import React, { useState } from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';
import Navbar from './Navbar';

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
             <Navbar/>
             <br/>
            <h3>Category Management</h3>
            <br/>
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
        
    },
};
