import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet"
import { deleteWishList } from "@store/actions";
import CardList from '@component/cardList';
import arrowBack from '../../arrowback.svg';

const WishList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wishList);

    const goBack = () => {
        history.goBack();
    }

    const deleteListItem = (item) => {
        dispatch(deleteWishList(item))
    }

    return (
        <div className="container p-4">
            <Helmet>
                <title>Wish List Product SehatQ</title>
                <meta name="description" content="Wish List description" />
                <meta name="keyword" content="Wish List keyword" />
            </Helmet>
            <div className="flex">
                <button onClick={goBack} className="mr-2">
                    <img src={arrowBack} alt="icon-arrowback" className="icon-detail" />
                </button>
                <h2>Wishlist</h2>
            </div>
            <div>
                {Boolean(wishList.wishList.length) && wishList.wishList.map((item, index) => {
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

export default WishList