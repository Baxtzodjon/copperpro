import React, { useState } from "react";

function Discount({ item }) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>

            <div className="product_bst_slr_dis">

                <div className='like_blc_dis'>

                    <div className='proc_image_dis'>

                        <img src={item.img} alt={item.id} />

                    </div>

                    <div className='sale_blc_dis'>

                        <span>Sale</span>

                    </div>

                    <div className='likes_dis'>

                        <div className="like_blc" onClick={handleLike}>

                            <img src={liked ? '/icons/heart_like.png' : '/icons/heart.png'} alt="" />

                        </div>

                    </div>

                </div>

                <div className='prd_text_dis'>

                    <p>{item.title}</p>

                    <div className='sale_texts'>

                        <small>{item.price}</small>

                        <div className='line_sale'></div>

                        <h5>{item.price}</h5>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Discount;