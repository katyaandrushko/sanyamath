// // import './testimonials.scss'
// // import { useState } from 'react'

// // function Testimonials() {
// //   const [currentSlide, setCurrentSlider] = useState(0)
// //   const data = [
// //     {
// //       id: 1,
// //       name: 'імя учня',
// //       title: 'курс: експерт курс',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
// //     },
// //     {
// //       id: 2,
// //       name: 'імя учня',
// //       title: 'курс: експерт курс',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',

// //       featured: true,
// //     },
// //     {
// //       id: 3,
// //       name: 'імя учня',
// //       title: 'курс: експерт курс',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
// //     },
// //     {
// //       id: 4,
// //       name: 'імя учня',
// //       title: 'курс: експерт курс',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
// //     },
// //     {
// //       id: 5,
// //       name: 'імя учня',
// //       title: 'курс: експерт курс',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
// //     },
// //     {
// //       id: 6,
// //       name: 'імя учня',
// //       title: 'курс: експерт курс',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
// //     },
// //   ]

// //   const handleClick = (way) => {
// //     way === 'left'
// //       ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : 2)
// //       : setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
// //   }

// //   return (
// //     <div classNameName="testimonials" id="testimonials">
// //       <h1>Testimonials</h1>
// //       <div
// //         classNameName="container"
// //         style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
// //       >
// //         {data.map((d) => (
// //           <div classNameName={d.featured ? 'card featured' : 'card'}>
// //             <div classNameName="top">
// //               <img src="assets/right-arrow.png" classNameName="left" alt="" />
// //               <img src={d.img} classNameName="user" />
// //               <img src={d.icon} alt="" classNameName="right" />
// //             </div>
// //             <div classNameName="center">{d.desc}</div>
// //             <div classNameName="bottom">
// //               <h3>{d.name}</h3>
// //               <h4>{d.title}</h4>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <img
// //         src="assets/arrow.png"
// //         classNameName="arrow left"
// //         alt=""
// //         onClick={() => handleClick('left')}
// //       />
// //       <img
// //         src="./assets/arrow.png"
// //         classNameName="arrow right"
// //         alt=""
// //         onClick={() => handleClick()}
// //       />
// //     </div>
// //   )
// // }

// // export default Testimonials

// // import React from 'react'
// // import './testimonials.scss'
// // import { useState } from 'react'

// // function Testimonials() {
// //   const [currentSlide, setCurrentSlider] = useState(0)
// //   const data = [
// //     {
// //       id: 1,
// //       name: 'Tom Durden',
// //       title: 'Senior Developer',
// //       img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/twitter.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
// //     },
// //     {
// //       id: 2,
// //       name: 'Alex Kalinski',
// //       title: 'Co-Founder of DELKA',
// //       img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/youtube.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
// //       featured: true,
// //     },
// //     {
// //       id: 3,
// //       name: 'Martin Harold',
// //       title: 'CEO of ALBI',
// //       img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/linkedin.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem',
// //     },
// //     {
// //       id: 4,
// //       name: 'Alex Kalinski',
// //       title: 'Co-Founder of DELKA',
// //       img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/youtube.png',
// //       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
// //       featured: true,
// //     },
// //     {
// //       id: 5,
// //       name: 'Martin Harold',
// //       title: 'CEO of ALBI',
// //       img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// //       icon: 'assets/.png',
// //       desc: 'Lorem ipsumdsfdsfdsng elit. Placeat magnam dolorem',
// //     },
// //   ]

// //   // слайдер вручну

// //   const handleClick = (way) => {
// //     way === 'left'
// //       ? setCurrentSlider(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
// //       : setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
// //   }

// //   // слайдер вручну

// //   return (
// //     <section classNameName="works">
// //       <div classNameName="testi">
// //         <div
// //           classNameName="slider"
// //           style={{ transform: `translateX(-${currentSlide * 86}vw)` }}
// //         >
// //           {data.map((d) => (
// //             <div classNameName="container">
// //               <div classNameName="item">
// //                 <div classNameName="top">
// //                   <img src="assets/right-arrow.png" classNameName="left" alt="" />
// //                   <img src={d.img} classNameName="user" />
// //                   <img src={d.icon} alt="" classNameName="right" />
// //                 </div>
// //                 <div classNameName="center">{d.desc}</div>
// //                 <div classNameName="bottom">
// //                   <h3>{d.name}</h3>
// //                   <h4>{d.title}</h4>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <img
// //           src="assets/arrow.png"
// //           classNameName="arrow left"
// //           alt=""
// //           onClick={() => handleClick('left')}
// //         />
// //         <img
// //           src="assets/arrow.png"
// //           classNameName="arrow right"
// //           alt=""
// //           onClick={() => handleClick()}
// //         />
// //       </div>
// //     </section>
// //   )
// // }

// // export default Testimonials

// import './testimonials.scss'

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
// import 'swiper/css/effect-coverflow'

// const data = [
//   {
//     id: 'feedback-1',
//     content:
//       'Загалом супер,як і самі заняття,так і домашка,завжди усе зрозуміло,коли питання з`являлися їх швидко змушували зникнути,бо пояснення тут як тут,дуже рада була готуватися разом,бо сама б і на 130 певне не написала',
//     name: 'імя прізв',
//     title: '@moskalnia_pomry',
//     img: './assets/testimon1.jpg',
//   },
//   {
//     id: 'feedback-2',
//     content:
//       'Добрий вечір! Я склала НМТ на 171 з математики, і неймовірно рада результату! Ви з Алексом витягнули мене зі 107😅 на той результат, який сьогодні є🥹 хочу подякувати за курс. Завдяки ньому я почала навіть любити математику. Матеріал викладений дуже цікаво та зрозуміло, куратор також крута. Хоч я й дивлюся всі уроки в записі, але це реально дуже-дуже крутою. Дякуємо Вам за вашу роботу❤️',
//     name: '@Sova_mar',
//     title: '@Sova_mar',
//     img: './assets/tstimon2.jpg',
//   },
//   {
//     id: 'feedback-3',
//     content:
//       'It is usually people in the money business, finance, and international trade that are really rich.',
//     name: 'Kenn Gallagher',
//     title: 'Founder & Leader',
//     img: 'https://i.imgur.com/dLxxRDy.png',
//   },
//   {
//     id: 'feedback-1',
//     content:
//       'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
//     name: 'імя прізв',
//     title: '@нікнейм',
//     img: 'https://i.imgur.com/Dn0qoCG.png',
//   },
//   {
//     id: 'feedback-1',
//     content:
//       'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
//     name: 'імя прізв',
//     title: '@нікнейм',
//     img: 'https://i.imgur.com/Dn0qoCG.png',
//   },
//   {
//     id: 'feedback-1',
//     content:
//       'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
//     name: 'імя прізв',
//     title: '@нікнейм',
//     img: 'https://i.imgur.com/Dn0qoCG.png',
//   },
//   {
//     id: 'feedback-1',
//     content:
//       'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
//     name: 'імя прізв',
//     title: '@нікнейм',
//     img: 'https://i.imgur.com/Dn0qoCG.png',
//   },
//   {
//     id: 'feedback-1',
//     content:
//       'lorem dsfmbdhsvf  dhjfbdshjfvsd hdsbfdnsbfvdsnbfjdshfvdhsvf dshfbhdsvfdhsfvhfdvsdhfvdshfvdhfv',
//     name: 'імя прізв',
//     title: '@нікнейм',
//     img: 'https://i.imgur.com/Dn0qoCG.png',
//   },
// ]

// function Testimonials() {
//   return (
//     <>
//       <section
//         id="testimonials"
//         // classNameName={`sm:py-16 py-6 flex justify-center items-center flex-col relative`}
//       >
//         {/* <div classNameName="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

//         <div classNameName="title-tt">
//           <h2 classNameName="title-t">Що кажуть наші учні</h2>
//         </div>
//         {/* <Carousel autoplay autoplayInterval={3000} wrapAround={true}>
//       {feedback.map((card) => (
//         <FeedbackCard key={card.id} {...card} />
//       ))}
//     </Carousel> */}

//         <div classNameName="swip">
//           <Swiper
//             classNameName="swiper"
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             // spaceBetween={-70}
//             slidesPerView="auto"
//             navigation
//             pagination={{ clickable: true }}
//             scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//           >
//             {data.map((d) => (
//               <SwiperSlide classNameName="iiii">
//                 <div classNameName="smdns">
//                   <div classNameName="recti">
//                     <div classNameName="iiimg">
//                       <img src={d.img} alt="" classNameName="immg" />
//                     </div>

//                     <h4>{d.title}</h4>
//                     <p>{d.content}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Testimonials

import React from 'react'
import './testimonials.scss'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h1 className="title">Відгуки учнів</h1>

      <div className="outer">
        <div className="inner">
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/testimon3.jpg" alt="" />
              </div>
              <div className="detbox">
                <p className="name dark">Таня Ілютенко</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Математика 151 бал. Чесно сказати, якби не цей курс, я б склала
                десь на 100 максимум. Такі завдання, шо просто так не вгадаєш і
                не додумаєшся сам. А школу я закінчила ще в 2015, та й то нічого
                не знала з математики😅 Дуже вдячна❤️ програма дуже добре
                продумана, всі конспекти під носом, і найбільше подобається, як
                Алекс пояснює, в школі було тупо. Я зараз вчила все заново, а не
                згадувала. Думаю, якби в мене було більше вільного часу, щоб
                займатись, було б набагато краще. А так аж соромно казати бал😅
                але я ж кажу, без цього я б не здала 100% А так маю прохідний
                бал на «Медицину» Дякуююю
              </p>
            </div>
          </div>

          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/testimon1.jpg" />
              </div>
              <div className="detbox">
                <p className="name dark">Мирослава</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Загалом супер,як і самі заняття,так і домашка,завжди усе
                зрозуміло,коли питання з'являлися їх швидко змушували
                зникнути,бо пояснення тут як тут,дуже рада була готуватися
                разом,бо сама б і на 130 певне не написала
              </p>
            </div>
          </div>

          <div className="div3 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/tstimon2.jpg" />
              </div>
              <div className="detbox">
                <p className="name dark">@Sova_mar</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Добрий вечір! Я склала НМТ на 171 з математики, і неймовірно
                рада результату! Ви з Алексом витягнули мене зі 107😅 на той
                результат, який сьогодні є🥹 Дякую велике❤️
              </p>
            </div>
          </div>

          <div className="div4 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/tstimon2.jpg" />
              </div>
              <div className="detbox">
                <p className="name dark ">@Sova_mar</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Хочу подякувати за курс. Завдяки ньому я почала навіть любити
                математику. Матеріал викладений дуже цікаво та зрозуміло,
                куратор також крута. Хоч я й дивлюся всі уроки в записі, але це
                реально дуже-дуже крутою. Дякуємо Вам за вашу роботу❤️
                <div className="hid dark">
                  Добрий вечір! Я склала НМТ на 171 з математики, і неймовірно
                  рада результату! Ви з Алексом витягнули мене зі 107😅 на той
                  результат, який сьогодні є🥹 Дякую велике❤️
                </div>
              </p>
            </div>
          </div>

          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/testimon4.jpg" />
              </div>
              <div className="detbox">
                <p className="name ">@frolikpower</p>
              </div>
            </div>

            <div className="review">
              <p>
                Алексе, ти крутий🚀! Дякую і тобі за старання заради нас,
                майбутніх абітурієнтів 🧑‍🎓 Хочу сказати просто шалено велике
                ДЯКУЮ за всю ту підтримку під час навчання на курсі🥺💔💔!!!!
                <br /> <br />
                Це все точно не було марним, і це, по великому рахунку, ваша з
                Алексом величезна робота, завдяки якій навчання стає максимально
                комфортним💔 Я буду сумувати за нашими уроками і за вами з
                Алексом, то були дуже круті та фанові часи з вами і моїми
                одногрупниками😭😭😭😭
              </p>
            </div>
          </div>

          <div className="div6 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img
                  src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg"
                  alt=""
                />
              </div>
              <div className="detbox">
                <p className="name dark">Нікнейм учня</p>
              </div>
            </div>
            <div className="review dark">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                quae, excepturi quos dolorum, magni nobis consequuntur ea
                architecto laborum debitis alias molestiae aperiam dolor
                mollitia consequatur nemo eveniet ipsam laudantium!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
