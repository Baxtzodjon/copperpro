import React, { useState } from "react";

function Goods({ item }) {
    const [likedBtn, setLikedBtn] = useState(false);

    const handleLikeBtn = () => {
        setLikedBtn(!likedBtn);
    };

    return (
        <div>

            <div className="product_bst_slr">

                <div className='like_blc'>

                    <div className='proc_image'>

                        <img src={item.img} alt={item.id} />

                    </div>

                    <div className='likes'>

                        <div className="like_blc" onClick={handleLikeBtn}>

                            <img src={likedBtn ? '/icons/heart_like.png' : '/icons/heart.png'} alt="" />

                        </div>

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