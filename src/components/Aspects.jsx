import React from "react";

function Aspects({ item }) {
    return (
        <div>

            <div className='skills'>

                <div className='icon_gradient'>

                    <img src={item.image} alt="" />

                </div>

                <h5>{item.title}</h5>

                <p>{item.description}</p>

                <div className='read_more'>

                    <span>Читать больше</span>

                    <img src="/icons/arrow_down.png" alt="" />

                </div>

            </div>

        </div>
    )
}

export default Aspects;