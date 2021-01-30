import React from "react";
import { Link } from "react-router-dom";
import '../style.css'

const CardPromo = ({ data }) => {
    return (
        <Link to={{ pathname: `/detail/${data.title}`, aboutProps: data }}>
            <div className="CardProduct text-center mt-4">
                <img src={data.imageUrl} alt={`${data.title}`} className="card-image-big block m-auto border-2 rounded-md" />
                <div className="text-left">
                    <h1 className="title text-lg">{data.title}</h1>
                    <h2 className="price text-sm">{data.price}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CardPromo