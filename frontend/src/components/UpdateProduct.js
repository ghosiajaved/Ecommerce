/* import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
    const [productName, setProductName] = useState('');
    const [productData, setProductData] = useState({
        description: '',
        price: '',
        quantity: '',
        category: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isProductFetched, setIsProductFetched] = useState(false);
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/products/${productName}`, productData);
            setSuccessMessage('Product updated successfully!');
            setErrorMessage('');
            setIsProductFetched(false);

            setTimeout(() => {
                setFormVisible(false);
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            console.error('There was an error updating the product!', error);
            setErrorMessage('Error updating product.');
        }
    };

    const handleFetchProduct = async () => {
        if (!productName) return;

        try {
            const response = await axios.get(`http://localhost:3000/api/products/${productName}`);
            setProductData(response.data);
            setIsProductFetched(true);
            setErrorMessage('');
        } catch (error) {
            console.error('There was an error fetching the product data!', error);
            setErrorMessage('Error fetching product data.');
            setIsProductFetched(false);
        }
    };

    return (
        <div style={styles.container}>
            {formVisible && (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Update Product</h2>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <button type="button" onClick={handleFetchProduct} style={styles.button}>
                        Search Product
                    </button>
                    {isProductFetched ? (
                        <>
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={productData.description}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={productData.price}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                value={productData.quantity}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <label>Category</label><br /><br />
                            <div style={styles.radioGroup}>
                                <label style={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="1"
                                        checked={productData.category === '1'}
                                        onChange={handleChange}
                                        style={styles.radioInput}
                                        required
                                    />
                                    Clothing
                                </label>
                                <label style={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="2"
                                        checked={productData.category === '2'}
                                        onChange={handleChange}
                                        style={styles.radioInput}
                                    />
                                    Snacks
                                </label>
                                <label style={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="3"
                                        checked={productData.category === '3'}
                                        onChange={handleChange}
                                        style={styles.radioInput}
                                    />
                                    Accessories
                                </label>
                            </div>
                            <button type="submit" style={styles.button}>Update Product</button>
                        </>
                    ) : (
                        <p style={styles.infoText}>Enter a product name and click "Search Product" to fetch details.</p>
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
    radioGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    radioLabel: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#333',
    },
    radioInput: {
        marginRight: '5px',
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

export default UpdateProduct;
 */

import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
    const [productName, setProductName] = useState('');
    const [productData, setProductData] = useState({
        description: '',
        price: '',
        quantity: '',
        category: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isProductFetched, setIsProductFetched] = useState(false);
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/products/${productName}`, productData);
            setSuccessMessage('Product updated successfully!');
            setErrorMessage('');
            setIsProductFetched(false);

            setTimeout(() => {
                setFormVisible(false);
                setSuccessMessage('');
            }, 2000);
        } catch (error) {
            console.error('There was an error updating the product!', error);
            setErrorMessage('Error updating product.');
        }
    };

    const handleFetchProduct = async () => {
        if (!productName) return;

        try {
            const response = await axios.get(`http://localhost:3000/api/products/${productName}`);
            setProductData(response.data);
            setIsProductFetched(true);
            setErrorMessage('');
        } catch (error) {
            console.error('There was an error fetching the product data!', error);
            setErrorMessage('Error fetching product data.');
            setIsProductFetched(false);
        }
    };

    return (
        <div style={styles.container}>
            {formVisible && (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={styles.heading}>Update Product</h2>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        style={styles.input}
                        required
                    />
                    {!isProductFetched && (
                        <button type="button" onClick={handleFetchProduct} style={styles.button}>
                            Search Product
                        </button>
                    )}
                    {isProductFetched ? (
                        <>
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={productData.description}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={productData.price}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                value={productData.quantity}
                                onChange={handleChange}
                                style={styles.input}
                                required
                            />
                            <label>Category</label><br /><br />
                            <div style={styles.radioGroup}>
                                <label style={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="1"
                                        checked={productData.category === '1'}
                                        onChange={handleChange}
                                        style={styles.radioInput}
                                        required
                                    />
                                    Clothing
                                </label>
                                <label style={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="2"
                                        checked={productData.category === '2'}
                                        onChange={handleChange}
                                        style={styles.radioInput}
                                    />
                                    Snacks
                                </label>
                                <label style={styles.radioLabel}>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="3"
                                        checked={productData.category === '3'}
                                        onChange={handleChange}
                                        style={styles.radioInput}
                                    />
                                    Accessories
                                </label>
                            </div>
                            <button type="submit" style={styles.button}>Update Product</button>
                        </>
                    ) : (
                        <p style={styles.infoText}>Enter a product name and click "Search Product" to fetch details.</p>
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
    radioGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    radioLabel: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#333',
    },
    radioInput: {
        marginRight: '5px',
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

export default UpdateProduct;
