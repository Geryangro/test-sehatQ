import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { setDetail, addList, addWishList } from "@store/actions";
import arrowBack from '../../arrowback.svg';
import share from '../../share.svg';
import heart from '../../heart.svg';
import './style.css'

const Detail = ({ location }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const data = location.aboutProps
    const reduxDetail = useSelector((state) => state.detail)
    const [dataDetail, setDataDetail] = useState({})

    useEffect(() => {
        if (data) {
            setDataDetail(data)
        } else {
            setDataDetail(reduxDetail.detail)
        }
    }, [data, reduxDetail])

    useEffect(() => {
        dispatch(setDetail(data))
    }, [data, dispatch])

    const goBack = () => {
        history.goBack();
    }

    const buyItems = () => {
        dispatch(addList(dataDetail))
        history.push('/cartpage')
    }

    const wishlist = () => {
        dispatch(addWishList(dataDetail))
        history.push('/wishlist')
    }

    return (
        <div className="container p-4">
            <Helmet>
                <title>Detail Product SehatQ - {`${dataDetail.title ? dataDetail.title : 'Produk SehatQ'}`}</title>
                <meta name="description" content={`Detail Product - ${dataDetail.title ? dataDetail.title : 'Produk SehatQ'}`} />
                <meta name="keyword" content={`Detail Keyword - ${dataDetail.title ? dataDetail.title : 'Produk SehatQ'}`} />
            </Helmet>
            {dataDetail && (
                <>
                    <section className="border-2 p-4 mb-4">
                        <div className="flex justify-between items-center">
                            <button onClick={goBack}>
                                <img src={arrowBack} alt="arrowback-icon" className="icon-detail" />
                            </button>
                            <a href={`https://twitter.com/share?url=${location.pathname}`} target="_blank" rel="noreferrer">
                                <img src={share} alt="share-icon" className="icon-detail-cstm" />
                            </a>
                        </div>
                            <img src={dataDetail.imageUrl} alt={`detail-${dataDetail.imageUrl}`} className="img-detail" />
                    </section>
                    <section>
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="title text-lg">{dataDetail.title}</h1>
                            <button onClick={wishlist}>
                                <img src={heart} alt="heart-icon" className="icon-detail-cstm" />
                            </button>
                        </div>
                        <p>
                            {dataDetail.description}
                        </p>
                    </section>
                    <section className="mt-4 flex justify-end items-center">
                        <h2 className="text-lg mr-8">{dataDetail.price}</h2>
                        <button className="btn-buy border-2 rounded-md" onClick={buyItems}>BUY</button>
                    </section>
                </>
            )}
        </div>
    )
}

export default Detail