import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { CartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    // Log the CartItems object to check its content
    console.log('CartItems:', CartItems);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url + "/images/" + image} alt="" />
                {CartItems && CartItems[id] !== undefined
                    ? <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{CartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                    : <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;