import React from "react";

function Goods({ item }) {
    return (
        <div>

            <div className="product_bst_slr">

                <div className='like_blc'>

                    <div className='proc_image'>

                        <img src={item.img} alt={item.id} />

                    </div>

                    <div className='likes'>

                        <img src="/icons/heart.png" alt="" />

                    </div>

                </div>

                <div className='prd_text'>

                    <p>{item.title}</p>

                    <h5>{item.price}</h5>

                </div>

            </div>

        </div>
    )
}

export default Goods;