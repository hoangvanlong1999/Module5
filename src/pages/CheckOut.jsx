import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import { Field, Form, Formik } from "formik";
import CustomerModel from '../models/CustomerModel';
import OrderModel from '../models/OrderModel';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { SET_CART } from "../redux/action";
import Swal from "sweetalert2";
import { VND } from '../extention/format'

import '../App.css';
import Masterlayout from "../layouts/Masterlayout";
const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên người nhận!"),
    email: Yup.string().required("Vui lòng nhập email!"),
    phone: Yup.string().required("Vui lòng nhập số điện thoại người nhận!"),
    address: Yup.string().required("Vui lòng nhập địa chỉ!"),
});




function Checkout() {


    const [itemsCart, setItemsCart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    )
    const [itemsUser, setItemsUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    )

    console.log(itemsCart);

    const showTotalPrice = () => {
        return VND.format(itemsCart.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.totalPrice), 0))
    }


    // State to store the user data fetched from the API
    const [userData, setUserData] = useState(null);
    // Inside Checkout component
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });


    useEffect(() => {
        const customerCookie = CustomerModel.getCookie("customer");
        if (customerCookie) {
            const customerData = JSON.parse(customerCookie);
            setCustomer(customerData);
        }
    }, []);

    const handleSubmit = (values) => {
        values.cart = itemsCart;
        values.customer_id = customer.id;
        console.log(values);
        OrderModel.checkout(values)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "Thanh toán thành công!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                // Xóa local storage cart và cập nhật state cart (nếu cần)
                localStorage.removeItem("cart");
                dispatch({ type: SET_CART, payload: [] });
                // Chuyển hướng tới trang chủ sau khi thanh toán thành công
                navigate('/');
            })
            .catch((err) => {
                console.error("Lỗi trong quá trình thanh toán:", err);
                Swal.fire({
                    icon: "error",
                    title: "Thanh toán thất bại!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <Masterlayout>
            <>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            '\n  /* CSS cho label của các trường nhập liệu */\n  label {\n    font-weight: bold;\n  }\n\n  /* CSS cho trường nhập liệu */\n  .form-control {\n    width: 100%;\n    padding: 0.5rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-bottom: 1rem;\n  }\n\n  /* CSS cho nút "Place order" */\n  .button {\n    background-color: #4caf50;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin-top: 1rem;\n    cursor: pointer;\n    border-radius: 4px;\n  }\n'
                    }}
                />


                <div className="container-fluid mt-5">
                    <div className="d-flex flex-row">
                        <div className="col-lg-8">
                            <h5 className="d-flex flex-row">
                                <span className="bg-secondary pr-3">Customer Information</span>
                            </h5>
                            <Formik
                                enableReinitialize={true}
                                initialValues={itemsUser}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <Field
                                            as="textarea"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                    {(itemsUser != null &&
                                        <button
                                            type="submit"
                                            className="button alt full-width-button"
                                            name="akasha_checkout_place_order"
                                            id="place_order"
                                            value="Place order"
                                            data-value="Place order"
                                        >
                                            Place order
                                        </button>) || (itemsUser == null && <Link class="btn btn-danger" to="/checkin">Bạn Phải Đăng Nhập</Link> )

                                    }

                                </Form>
                            </Formik>
                        </div>
                        <div className="d-flex flex-row">
                            {/* Display the cart items */}
                            <h3 id="order_review_heading">Your order</h3>
                            <div id="order_review" className="akasha-checkout-review-order">
                                <table className="shop_table akasha-checkout-review-order-table">
                                    <thead>
                                        <tr>
                                            <th className="product-name">Product</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemsCart &&
                                            itemsCart.map((cartItem) => (
                                                <tr key={cartItem.id} className="cart_item">
                                                    <td className="product-name">
                                                        {cartItem.name}&nbsp;&nbsp;
                                                        <strong className="product-quantity">
                                                            × {cartItem.quantity}
                                                        </strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="akasha-Price-amount amount">
                                                            <span className="akasha-Price-currencySymbol">$</span>
                                                            <NumericFormat
                                                                value={cartItem.price * cartItem.quantity}
                                                                displayType="text"
                                                                thousandSeparator={true}
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td>
                                                <span className="akasha-Price-amount amount">
                                                    <span className="akasha-Price-currencySymbol">$</span>
                                                    <NumericFormat
                                                        value={showTotalPrice()}
                                                        displayType="text"
                                                        thousandSeparator={true}
                                                    />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>Total</th>
                                            <td>
                                                <strong>
                                                    <span className="akasha-Price-amount amount">
                                                        <span className="akasha-Price-currencySymbol">$</span>
                                                        <NumericFormat
                                                            value={showTotalPrice()}
                                                            displayType="text"
                                                            thousandSeparator={true}
                                                        />
                                                    </span>
                                                </strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        </Masterlayout>
    );


}
export default Checkout;