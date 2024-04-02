import { useState, useContext } from "react";

import "./SingleProduct.css";
import RelatedProducts from './RelatedProducts/RelatedProducts'
import {
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaCartPlus,
    FaGithub,
} from 'react-icons/fa'

import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import { Link } from "react-router-dom";

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1)
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)
    const { handleAddToCart } = useContext(Context)

    const increment = () => {
        setQuantity((prevState) => prevState + 1)
    }

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        })
    }

    const product = data?.data[0]?.attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left"><img src={process.env.REACT_APP_DEV_URL + product?.img?.data[0]?.attributes?.url} alt="" /></div>
                    <div className="right">
                        <span className="name">{product?.title}</span>
                        <span className="price">&#8377;{product?.price}</span>
                        <span className="desc">{product?.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement} >-</span>
                                <span>{quantity}</span>
                                <span onClick={increment} >+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() => {
                                handleAddToCart(data?.data[0], quantity);
                                setQuantity(1);
                            }} >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>{product?.categories?.data[0]?.attributes?.title}</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <div className="icons">
                                        <Link to="https://www.linkedin.com/in/yatharth-rathi-8a42b7243" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn className="ico" />
                                        </Link>
                                    </div>
                                    <div className="icons">
                                        <Link to="https://www.instagram.com/yatharthrathii" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="ico" />
                                        </Link>
                                    </div>
                                    <div className="icons">
                                        <Link to="https://twitter.com/yatharthrathii" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className="ico" />
                                        </Link>
                                    </div>
                                    <div className="icons">
                                        <Link to="https://github.com/yatharthrathii" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="ico" />
                                        </Link>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product?.categories?.data[0]?.id} />
            </div>
        </div>
    )
};

export default SingleProduct;
