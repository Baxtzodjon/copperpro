import React from "react"
import logo from "/icons/logo.png"
import heartIcon from "/icons/heart.png"
import shopCartIcon from "/icons/shopping_cart.png"
import userIcon from "/icons/user.png"

const Layout = ({ children }) => {

    const top = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>

            <div className="background_block">

                <div className="container">

                    <header className="header">

                        <a href="#" className="logo">

                            <img src={logo} alt="logo" />

                        </a>

                        <nav className="navbar">

                            <a href="#" className="active">Каталог</a>
                            <a href="#">Новости</a>
                            <a href="#">Доставка</a>
                            <a href="#">О нас</a>
                            <a href="#">Контакты</a>

                        </nav>

                        <div className="nav_block">

                            <div className="nv_blk">

                                <img src={heartIcon} alt="heart" />

                            </div>

                            <div className="nv_blk">

                                <img src={userIcon} alt="user" />

                            </div>

                            <div className="nv_blk">

                                <img src={shopCartIcon} alt="shoppingcart" />

                            </div>

                        </div>

                    </header>

                    <section className='sec_block'>

                        <div className='copper_texts'>

                            <div className='bestseller_texts'>

                                <h1>Хит продаж</h1>

                                <div className='line'></div>

                                <p>Дистиллятор для эфирных масел</p>

                            </div>

                            <div className='price'>

                                <span>Цена</span>

                                <h4>4 906 грн</h4>

                            </div>

                            <button className="btn_texts">Купить</button>

                            <div className="bullets">

                                <div className="bull active_bl"></div>
                                <div className="bull"></div>
                                <div className="bull"></div>

                            </div>

                            <div className="scroll_up">

                                <div className="scroll_line"></div>

                                <div className="scroll_cir"></div>

                            </div>

                        </div>

                    </section>

                </div>

            </div>

            {children}

            <footer className="footer">

                <div className="footer_grd">

                    <div className="container">

                        <div className="footer_block">

                            <div className="left_block">

                                <div className="first_ftr_blc">

                                    <a href="#">

                                        <img src={logo} alt="logo" />

                                    </a>

                                    <span>© 2021 “Copper Pro” Все права защищенны</span>

                                    <a href="#">Политика конфиденциальности</a>

                                </div>

                            </div>

                            <div className="right_block">

                                <div className="second_ftr_block">

                                    <h4>Навигация</h4>

                                    <a href="#">Каталог</a>
                                    <a href="#">Новости</a>
                                    <a href="#">Доставка</a>
                                    <a href="#">О нас</a>
                                    <a href="#">Контакты</a>

                                </div>

                                <div className="third_ftr_block">

                                    <h4>Каталог</h4>

                                    <a href="#">Для эфирных масел</a>
                                    <a href="#">Для гидролатов</a>
                                    <a href="#">Медная посуда</a>
                                    <a href="#">Доставка</a>
                                    <a href="#">Аксессуары из меди</a>
                                    <a href="#">Индивидуальный заказ</a>
                                    <a href="#">Скидки и предложения</a>

                                </div>

                                <div className="fourth_ftr_block">

                                    <h4>Контакты</h4>

                                    <span>Бажана 8-Б, Киев, 02132 Украина</span>

                                    <a href="#">+38 (096) 990 67 56</a>

                                    <a href="#">a.alambik@gmail.com</a>

                                    <div className="socials_links">

                                        <a href="#">

                                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-21.png" alt="twitter" />

                                        </a>

                                        <a href="#">

                                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-21.png" alt="facebook" />

                                        </a>

                                        <a href="#">

                                            <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-21.png" alt="instagram" />

                                        </a>

                                    </div>

                                </div>

                            </div>

                            <div onClick={top} className="up_block">ВВЕРХ</div>

                        </div>

                    </div>

                    <div className="back_white_block"></div>

                </div>

            </footer>

        </>
    )
}

export default Layout