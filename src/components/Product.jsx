import React from "react";

function Product({ item }) {
    return (
        <div className="product">

            <div className='dish'>

                <img src={item.img} alt={item.title} />

                <div className="content">

                    <h2>{item.title}</h2>

                    <div className="discount">

                        <div className="item_blc">

                            <div className="title">{item.firdiscount}</div>

                        </div>

                        <div className="item_blc">

                            <div className="title">{item.secdiscount}</div>

                        </div>

                        <div className="item_blc">

                            <div className="title">{item.thrdiscount}</div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Product;