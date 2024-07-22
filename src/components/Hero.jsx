import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import tenis from '../assets/tenisHero.svg'
import ball from '../assets/ball.svg'

import { Pagination } from 'swiper/modules';

export default function Hero() {
    return (
            <div class="w-full px-1 relative bg-[#F5F5F5] mt-5">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <section
                            class="px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] flex flex-col-reverse lg:flex-row items-center bg-[#F5F5F5] lg:gap-[20px] h-full lg:h-[550px]">
                            <div
                                class="flex flex-col gap-2 pb-10 items-center text-center lg:text-left lg:items-start w-full lg:w-[500px]">
                                <p class="text-xl text-[#F6AA1C] font-bold">
                                    Melhores ofertas personalizadas
                                </p>
                                <p class="text-6xl font-bold">
                                    Queima de <br />estoque Nike 🔥
                                </p>
                                <p>
                                    Consequat culpa exercitation mollit nisi
                                    excepteur do <br />
                                    do tempor laboris eiusmod irure consectetur.
                                </p>
                                <button
                                    class="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-900 mt-4 pt-3 pb-3 w-[200px]">
                                    Ver Ofertas
                                </button>
                            </div>
                            <div class="md:ml-auto">
                                <img
                                    class="w-full h-auto xl:w-[480px] xl:h-[360px]"
                                    src={tenis}
                                    alt="Imagem" />
                            </div>
                            <div className='absolute -right-10 top-10 md:right-20 md:top-20'>
                                <img src={ball} alt="" />
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section
                                class="px-4 sm:px-[20px] md:px-[50px] lg:px-[70px] xl:px-[100px] flex flex-col-reverse lg:flex-row items-center bg-[#F5F5F5] gap-4 lg:gap-[20px] h-full lg:h-[550px]">
                                <div
                                    class="flex flex-col gap-2 pb-10  items-center text-center lg:text-left lg:items-start w-full lg:w-[500px]">
                                    <p class="text-xl text-pink-500 font-bold">
                                        Melhores ofertas personalizadas
                                    </p>
                                    <p class="text-6xl font-bold">
                                        Queima de <br />estoque Nike 🔥
                                    </p>
                                    <p>
                                        Consequat culpa exercitation mollit nisi
                                        excepteur do <br />
                                        do tempor laboris eiusmod irure consectetur.
                                    </p>
                                    <button
                                        class="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-900mt-4 pt-3 pb-3 w-[200px]">
                                        Ver Ofertas
                                    </button>
                                </div>
                                <div class="md:ml-auto">
                                    <img
                                        class="w-full h-auto xl:w-[680px] xl:h-[460px]"
                                        src={tenis}
                                        alt="Imagem" />
                                </div>
                            </section>
                    </SwiperSlide>
                </Swiper>
            </div>
    )
}