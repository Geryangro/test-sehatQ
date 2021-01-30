import React from "react";
import { Link } from "react-router-dom";
import '../style.css'

const CardList = ({ data }) => {
    return (
        <Link to={{ pathname: `/detail/${data.title}`, aboutProps: data }}>
            <div className="CardProduct flex text-center mt-4 border-2 rounded-md items-center p-2">
                <img src={data.imageUrl} alt={`${data.title}`} className="card-image-side" />
                <div className="text-left p-4">
                    <h1 className="title text-lg">{data.title}</h1>
                    <h2 className="price text-sm">{data.price}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CardList