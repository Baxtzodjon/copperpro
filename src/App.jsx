import './App.css'
import Goods from './components/Goods';
import Product from './components/Product';
import Layout from './layout/Layout'
import souvenirImage from '/images/souvenir.png'
import illustratorImage from '/images/illustrator.png'
import Testimonial from './components/Testimonial';
import Aspects from './components/Aspects';

function App() {

  const products = [
    {
      id: 1,
      img: "/images/first_proc.png",
      title: "Для эфирных масел",
      firdiscount: "-30 %",
      secdiscount: "-50 %",
      thrdiscount: "-80 %",
    },
    {
      id: 2,
      img: "/images/second_proc.png",
      title: "Для гидролатов",
      firdiscount: "-12 %",
      secdiscount: "-75 %",
      thrdiscount: "-55 %",
    },
    {
      id: 3,
      img: "/images/third_proc.png",
      title: "Медная посуда",
      firdiscount: "-45 %",
      secdiscount: "-78 %",
      thrdiscount: "-24 %",
    },
    {
      id: 4,
      img: "/images/fourth_proc.png",
      title: "Аксессуары из меди",
      firdiscount: "-65 %",
      secdiscount: "-82 %",
      thrdiscount: "-92 %",
    },
    {
      id: 5,
      img: "/images/fifth_proc.png",
      title: "Индивидуальный заказ",
      firdiscount: "-15 %",
      secdiscount: "-18 %",
      thrdiscount: "-95 %",
    },
    {
      id: 6,
      img: "/images/third_proc.png",
      title: "Скидки и предложения",
      firdiscount: "-48 %",
      secdiscount: "-32 %",
      thrdiscount: "-99 %",
    },
  ];

  const products_sec_blc = [
    {
      id: 1,
      img: "/images/first_proc.png",
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
    },
    {
      id: 2,
      img: "/images/second_proc.png",
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
    },
    {
      id: 3,
      img: "/images/third_proc.png",
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
    },
  ];

  const testimonial_texts = [
    {
      id: 1,
      names: "Иван Иванов",
      description: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
      date: "20.10.21",
    },
    {
      id: 2,
      names: "Иван Иванов",
      description: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
      date: "20.10.21",
    },
    {
      id: 3,
      names: "Иван Иванов",
      description: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.",
      date: "20.10.21",
    },
  ];

  const attainments = [
    {
      id: 1,
      image: "/icons/firt_icon.png",
      title: "Аутентичность",
      description: "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.",
    },
    {
      id: 2,
      image: "/icons/sec_icon.png",
      title: "Изысканность",
      description: "Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....",
    },
    {
      id: 3,
      image: "/icons/thir_icon.png",
      title: "Честная оплата",
      description: "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....",
    },
    {
      id: 4,
      image: "/icons/forh_icon.png",
      title: "Большой ассортимент",
      description: "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...",
    },
    {
      id: 5,
      image: "/icons/fif_icon.png",
      title: "Доставка по всему миру",
      description: "Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.",
    },
    {
      id: 6,
      image: "/icons/sixh_icon.png",
      title: "Гарантия качества",
      description: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции.",
    },
    {
      id: 7,
      image: "/icons/sevh_icon.png",
      title: "Удобство в использовании",
      description: "Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...",
    },
    {
      id: 8,
      image: "/icons/eigh_icon.png",
      title: "Забота об окружающей среде",
      description: "От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....",
    },
  ];

  return (
    <>
      <Layout>

        <main className='main_block'>

          <div className='container'>

            <section className='products_sec'>

              <h1 className='product_text'>Наша продукция</h1>

              <div className='products_block'>

                <div className='dishes'>

                  {products.map(item => <Product key={item.id} item={item} />)}

                </div>

              </div>

            </section>

          </div>

          <section className='best_selling_sec'>

            <div className='container'>

              <h1 className='product_text'>Лучшие продажи</h1>

              <div className='dishes'>

                {products_sec_blc.map(item => <Goods key={item.id} item={item} />)}

              </div>

              <div className='blts_btn'>

                <div className="bullets_slider">

                  <div className="bull_sli active_bl_sli"></div>
                  <div className="bull_sli"></div>
                  <div className="bull_sli"></div>

                </div>

                <button>Перейти в каталог</button>

              </div>

            </div>

          </section>

          <section className='new_proc'>

            <div className='container'>

              <h1 className='product_text'>новинки</h1>

              <div className='dishes'>

                {products_sec_blc.map(item => <Goods key={item.id} item={item} />)}

              </div>

              <div className='blts_btn'>

                <div className="bullets_slider">

                  <div className="bull_sli active_bl_sli"></div>
                  <div className="bull_sli"></div>
                  <div className="bull_sli"></div>

                </div>

                <button>Перейти в каталог</button>

              </div>

            </div>

          </section>

          <section className='discount_back_blc'>

            <div className='container'>

              <div className='discount_texts'>

                <h1>1 + 1 = 3</h1>

                <p>Закажите два товара и получите третий бесплатно</p>

                <button>Перейти в каталог</button>

              </div>

            </div>

            <div className="back_gradient_blc"></div>

            <div className='souvenir_blc'>

              <img src={souvenirImage} alt="" />

            </div>

            <div className='illustrator_blc'>

              <img src={illustratorImage} alt="" />

            </div>

            <h1 className='big_text'>COPPER PRO</h1>

          </section>

          <section className='new_proc'>

            <div className='container'>

              <h1 className='product_text'>мы рекомендуем</h1>

              <div className='dishes'>

                {products_sec_blc.map(item => <Goods key={item.id} item={item} />)}

              </div>

              <div className='blts_btn'>

                <div className="bullets_slider">

                  <div className="bull_sli active_bl_sli"></div>
                  <div className="bull_sli"></div>
                  <div className="bull_sli"></div>

                </div>

                <button>Перейти в каталог</button>

              </div>

            </div>

          </section>

          <section className='best_selling_sec'>

            <div className='container'>

              <h1 className='product_text'>Скидки</h1>

              <div className='dishes'>

                {products_sec_blc.map(item => <Goods key={item.id} item={item} />)}

              </div>

              <div className='blts_btn'>

                <div className="bullets_slider">

                  <div className="bull_sli active_bl_sli"></div>
                  <div className="bull_sli"></div>
                  <div className="bull_sli"></div>

                </div>

                <button>Перейти в каталог</button>

              </div>

            </div>

          </section>

          <section className='new_proc'>

            <div className='container'>

              <h1 className='product_text'>Что думают о нас</h1>

              <div className='testimonials'>

                {testimonial_texts.map(item => <Testimonial key={item.id} item={item} />)}

              </div>

              <div className='blts_btn'>

                <div className="bullets_slider">

                  <div className="bull_sli active_bl_sli"></div>
                  <div className="bull_sli"></div>
                  <div className="bull_sli"></div>

                </div>

              </div>

            </div>

          </section>

          <section className='knowledge_blc'>

            <div className='container'>

              <h1 className='product_text'>Почему выбирают нас</h1>

              <div className='why_choouse_blc'>

                {attainments.map(item => <Aspects key={item.id} item={item} />)}

              </div>

            </div>

          </section>

        </main>

      </Layout>

    </>
  )
}

export default App
