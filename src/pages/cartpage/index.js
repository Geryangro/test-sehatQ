import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet"
import { deleteList } from "@store/actions";
import CardList from '@component/cardList';
import arrowBack from '../../arrowback.svg';
import './style.css'

const CartPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cartList);

    const goBack = () => {
        history.goBack();
    }

    const deleteListItem = (item) => {
        dispatch(deleteList(item))
    }

    return (
        <div className="container p-4">
            <Helmet>
                <title>Cart Page Product SehatQ</title>
                <meta name="description" content="Cart Page description" />
                <meta name="keyword" content="Cart Page keyword" />
            </Helmet>
            <div className="flex">
                <button onClick={goBack} className="mr-2">
                    <img src={arrowBack} alt="arrow-icon" className="icon-detail" />
                </button>
                <h2>Purchase History</h2>
            </div>
            <div>
                {Boolean(cartList.cartList.length) && cartList.cartList.map((item, index) => {
                  return (
                    <div key={index}>
                        <CardList data={item} />
                        <div className="flex flex-row-reverse mt-2">
                            <button className="btn-delete" onClick={() => deleteListItem(item)}>Delete</button>
                        </div>
                    </div>
                  )  
                })}
                
            </div>
        </div>
    )
}

export default CartPage