import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice';

const ProductList = () => {
    const dispatch = useDispatch();

    const products = [
        { id: 1, name: 'C-Sharp' },
        { id: 2, name: 'Java' },
        { id: 3, name: 'Spring Boot' },
    ];

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };

    return (
        <div>
            <h2>Catalog</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}{' '}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
