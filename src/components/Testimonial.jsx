import React from "react";

function Testimonial({item}) {
    return (
        <div>

            <div className='testimonial_blc'>

                <img src="/images/user.png" alt="" />

                <div className='quote_blc'>

                    <img src="/images/quote.png" alt="" />

                </div>

                <h5>{item.names}</h5>

                <p>{item.description}</p>

                <h6>{item.date}</h6>

            </div>

        </div>
    )
}

export default Testimonial;