import React, { useEffect, useState } from 'react';
import Masterlayout from '../layouts/Masterlayout';
import { VND } from '../extention/format'
import { urlImage } from '../extention/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {removeItemCart} from '../extention/cart'
import { Link } from 'react-router-dom';

function Cart(props) {
    const [itemsCart, setItemsCart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    )
    const handleFieldChange = (id, newValue) => {
        setItemsCart((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: parseInt(newValue), totalPrice: item.price * newValue };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedItems))
            return updatedItems;
        });
    };

    const onChangeQuantity = (id, e) => {
        const newValue = e.target.value < 1 ? 1 : e.target.value;
        handleFieldChange(id, newValue);
    }

    const showTotalPrice = () => {
        return VND.format(itemsCart.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.totalPrice), 0))
    }

    const removeItem = (id) =>{
        setItemsCart(itemsCart.filter(x => x.id !== id))
        removeItemCart(id)
        alert('Remove item success');
    }
    
    return (
        <Masterlayout>
            <section className="main-content">
                <div className="row">
                    <div className="span9">
                        <h4 className="title">
                            <span className="text">
                                <strong>Your</strong> Cart
                            </span>
                        </h4>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Remove</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    itemsCart.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <p onClick = {()=>removeItem(item.id)} style ={{color:'red',padding: '10px 10px 0 10px', cursor:'pointer'}}>
                                                        <FontAwesomeIcon icon={faTrashCan} size="2x" />
                                                    </p>
                                                    
                                                </td>
                                                <td>
                                                    <img
                                                        src={urlImage + item.image}
                                                        alt=""
                                                        width='50px'
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <input type="number" min={1} onChange={(e) => onChangeQuantity(item.id, e)} value={item.quantity} className="input-mini" />
                                                </td>
                                                <td>{VND.format(item.price)}</td>
                                                <td>{VND.format(item.totalPrice)}</td>
                                            </tr>
                                        )
                                    })
                                }

                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>
                                        <strong>
                                            {
                                                showTotalPrice()
                                            }
                                        </strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        
                        <hr />
                        
                        <hr />
                        <p className="buttons center">
                           
                            <Link to="/checkout" className="btn btn-inverse" type="submit" id="checkout">
                                Checkout
                            </Link>
                        </p>
                    </div>
                    <div className="span3 col">
                        <div className="block">
                            <ul className="nav nav-list">
                                <li className="nav-header">SUB CATEGORIES</li>
                                <li>
                                    <a href="products.html">Nullam semper elementum</a>
                                </li>
                                <li className="active">
                                    <a href="products.html">Phasellus ultricies</a>
                                </li>
                                <li>
                                    <a href="products.html">Donec laoreet dui</a>
                                </li>
                                <li>
                                    <a href="products.html">Nullam semper elementum</a>
                                </li>
                                <li>
                                    <a href="products.html">Phasellus ultricies</a>
                                </li>
                                <li>
                                    <a href="products.html">Donec laoreet dui</a>
                                </li>
                            </ul>
                            <br />
                            <ul className="nav nav-list below">
                                <li className="nav-header">MANUFACTURES</li>
                                <li>
                                    <a href="products.html">Adidas</a>
                                </li>
                                <li>
                                    <a href="products.html">Nike</a>
                                </li>
                                <li>
                                    <a href="products.html">Dunlop</a>
                                </li>
                                <li>
                                    <a href="products.html">Yamaha</a>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <h4 className="title">
                                <span className="pull-left">
                                    <span className="text">Randomize</span>
                                </span>
                                <span className="pull-right">
                                    <a className="left button" href="#myCarousel" data-slide="prev" />
                                    <a className="right button" href="#myCarousel" data-slide="next" />
                                </span>
                            </h4>
                            <div id="myCarousel" className="carousel slide">
                                <div className="carousel-inner">
                                    <div className="active item">
                                        <ul className="thumbnails listing-products">
                                            <li className="span3">
                                                <div className="product-box">
                                                    <span className="sale_tag" />
                                                    <a href="product_detail.html">
                                                        <img alt="" src="themes/images/ladies/2.jpg" />
                                                    </a>
                                                    <br />
                                                    <a href="product_detail.html" className="title">
                                                        
                                                    </a>
                                                    <br />
                                                    <a href="#" className="category">
                                                        
                                                    </a>
                                                    <p className="price"></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="item">
                                        <ul className="thumbnails listing-products">
                                            <li className="span3">
                                                <div className="product-box">
                                                    <a href="product_detail.html">
                                                        <img alt="" src="themes/images/ladies/4.jpg" />
                                                    </a>
                                                    <br />
                                                    <a href="product_detail.html" className="title">
                                                        
                                                    </a>
                                                    <br />
                                                    <a href="#" className="category">
                                                        
                                                    </a>
                                                    <p className="price"></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Masterlayout>
    );
}

export default Cart;