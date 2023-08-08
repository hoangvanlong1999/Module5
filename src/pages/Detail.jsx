import React, { useEffect, useState } from 'react';
import Masterlayout from '../layouts/Masterlayout';
import ProductModel from '../models/ProductModel';
import { useParams } from 'react-router-dom';
import { addItemToCartLocalStore } from '../extention/cart'
import { VND } from '../extention/format'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Detail(props) {

    const [product, setProduct] = useState();
    const Urlnumber = 'http://127.0.0.1:8000/public/uploads/product/';
    const { id } = useParams();
    useEffect(() => {
        ProductModel.show(id).then((res) => {
            setProduct(res.data)
        })
    }, [id])

    const addToCart = (id) => {
        addItemToCartLocalStore(id, product)
    }
    const styleLoading = {
        marginTop : '50px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
    return (
        <Masterlayout>
            <>
                {
                    product ?
                        <div className="product-details">
                            <div className="product-image">
                                <img src={Urlnumber + product.image} alt="Ảnh sản phẩm" />
                            </div>
                            <div className="product-info">
                                <h2 className="product-title">{product.name}</h2>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">{VND.format(product.price)} VND</p>
                                <button className="add-to-cart-button" onClick={() => addToCart(product.id)}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        :
                        <Box style ={styleLoading} sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                }
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n  .product-details {\n    display: flex;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    padding: 20px;\n  }\n  \n  .product-image {\n    flex: 0 0 40%;\n    margin-right: 20px;\n  }\n  \n  .product-image img {\n    max-width: 100%;\n  }\n  \n  .product-info {\n    flex: 1;\n  }\n  \n  .product-title {\n    font-size: 24px;\n    margin-bottom: 10px;\n  }\n  \n  .product-description {\n    font-size: 16px;\n    margin-bottom: 10px;\n  }\n  \n  .product-price {\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n  \n  .add-to-cart-button {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  \n  .add-to-cart-button:hover {\n    background-color: #0062cc;\n  }\n"
                    }}
                />
            </>



        </Masterlayout>
    );
}

export default Detail;