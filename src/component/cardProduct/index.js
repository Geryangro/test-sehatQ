import React from "react";
import '../style.css'

const CardProduct = ({ data }) => {
    return (
        <div className="CardProduct text-center p-4 w-32 border-2 mr-4 rounded-md">
            <h1>{data.name}</h1>
            <img src={data.imageUrl} alt={`${data.name}`} className="card-image block m-auto" />
        </div>
    )
}

export default CardProduct