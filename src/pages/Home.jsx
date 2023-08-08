import React, { useEffect, useState } from 'react';
import Masterlayout from '../layouts/Masterlayout';
import HomePageSlider from '../components/componentHome/HomePageSlider';
import HeaderText from '../components/componentHome/HeaderText';
import OurClient from '../components/componentHome/OurClient';
import ProductModel from '../models/ProductModel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {VND} from '../extention/format'
import {addItemToCartLocalStore} from '../extention/cart'

function Home(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductModel.getAllProduct().then((res) => {
            setProducts(res.data)
        })
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', '[]')
        }
    }, [])

    const addToCart = async (id) => {
        let item = await ProductModel.find(id).then((res) => {
            return res.data
        })
        addItemToCartLocalStore (id, item)
    }


    return (
        <Masterlayout>
            <HomePageSlider />
            <HeaderText />


            <section className="main-content">
                <div className="row">
                    <div className="span12">
                        <div className="row">
                            <div className="span12">
                                <h4 className="title">
                                    <span className="pull-left">
                                        <span className="text">
                                            <span className="line">
                                                Feature <strong>Products</strong>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="pull-right">
                                        <a className="left button" href="#myCarousel" data-slide="prev" />
                                        <a
                                            className="right button"
                                            href="#myCarousel"
                                            data-slide="next"
                                        />
                                    </span>
                                </h4>
                                <div id="myCarousel" className="myCarousel carousel slide">
                                    <div className="carousel-inner">
                                        <div className="active item">
                                            <ul className="thumbnails">

                                                {products.map((product) => (

                                                    <li className="span3">
                                                        <div className="product-box">
                                                            <span className="sale_tag" />
                                                            <p>
                                                                <Link to={"/detail/" + product.id}>
                                                                    <img
                                                                        src={product.image}
                                                                        alt=""
                                                                    />
                                                                </Link>
                                                            </p>
                                                            <Link to={"/detail/" + product.id} className="title">
                                                                {product.name}
                                                            </Link>
                                                            <br />
                                                            <Link to={"/detail/" + product.id} className="category">
                                                                Commodo consequat
                                                            </Link>
                                                            <p className="price">{VND.format(product.price)}</p>
                                                            <Link onClick={() => addToCart(product.id)}>
                                                                <FontAwesomeIcon icon={faCartPlus} size="2x" />
                                                            </Link>
                                                        </div>
                                                    </li>
                                                ))


                                                }


                                            </ul>
                                        </div>
                                        <div className="item">
                                            <ul className="thumbnails">
                                                <li className="span3">
                                                    <div className="product-box">
                                                        <p>
                                                            <a href="product_detail.html">
                                                                <img
                                                                    src="/assets/themes/images/ladies/5.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </p>
                                                        <a href="product_detail.html" className="title">
                                                            Know exactly
                                                        </a>
                                                        <br />
                                                        <a href="products.html" className="category">
                                                            Quis nostrud
                                                        </a>
                                                        <p className="price">$22.30</p>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="product-box">
                                                        <p>
                                                            <a href="product_detail.html">
                                                                <img
                                                                    src="/assets/themes/images/ladies/6.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </p>
                                                        <a href="product_detail.html" className="title">
                                                            Ut wisi enim ad
                                                        </a>
                                                        <br />
                                                        <a href="products.html" className="category">
                                                            Commodo consequat
                                                        </a>
                                                        <p className="price">$40.25</p>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="product-box">
                                                        <p>
                                                            <a href="product_detail.html">
                                                                <img
                                                                    src="/assets/themes/images/ladies/7.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </p>
                                                        <a href="product_detail.html" className="title">
                                                            You think water
                                                        </a>
                                                        <br />
                                                        <a href="products.html" className="category">
                                                            World once
                                                        </a>
                                                        <p className="price">$10.45</p>
                                                    </div>
                                                </li>
                                                <li className="span3">
                                                    <div className="product-box">
                                                        <p>
                                                            <a href="product_detail.html">
                                                                <img
                                                                    src="/assets/themes/images/ladies/8.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </p>
                                                        <a href="product_detail.html" className="title">
                                                            Quis nostrud exerci
                                                        </a>
                                                        <br />
                                                        <a href="products.html" className="category">
                                                            Quis nostrud
                                                        </a>
                                                        <p className="price">$35.50</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="row feature_box">
                            <div className="span4">
                                <div className="service">
                                    <div className="responsive">
                                        <img
                                            src="/assets/themes/images/feature_img_2.png"
                                            alt=""
                                        />
                                        <h4>
                                            MODERN <strong>DESIGN</strong>
                                        </h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and printing
                                            industry unknown printer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="service">
                                    <div className="customize">
                                        <img
                                            src="/assets/themes/images/feature_img_1.png"
                                            alt=""
                                        />
                                        <h4>
                                            FREE <strong>SHIPPING</strong>
                                        </h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and printing
                                            industry unknown printer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="span4">
                                <div className="service">
                                    <div className="support">
                                        <img
                                            src="/assets/themes/images/feature_img_3.png"
                                            alt=""
                                        />
                                        <h4>
                                            24/7 LIVE <strong>SUPPORT</strong>
                                        </h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and printing
                                            industry unknown printer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <OurClient />
        </Masterlayout>
    );
}

export default Home;