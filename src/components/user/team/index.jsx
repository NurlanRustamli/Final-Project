import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
function Team() {
    return (
        <section id='team'>
            <div className="container">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay,Pagination]}
                    className="mySwiper"
                    autoplay={{
                        delay:3000,
                        disableOnInteraction:false,
                      }}
                > 
                
                    <SwiperSlide>
                       
                            <div className="teamimg">
                                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/2.jpg" alt="" />
                            </div>
                            <div className="teaminfo">
                                <h3>William Dalin</h3>
                                <p>Co-Founder</p>
                            </div>
                        
                    </SwiperSlide>
            
                    <SwiperSlide>
                       
                            <div className="teamimg">
                                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/3.jpg" alt="" />
                            </div>
                            <div className="teaminfo">
                                <h3>Amelia Martin</h3>
                                <p>Leader</p>
                            </div>
                      
                    </SwiperSlide> 
          
                    <SwiperSlide>
                       
                            <div className="teamimg">
                                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/1.jpg" alt="" />
                            </div>
                            <div className="teaminfo">
                                <h3>Emma Welson</h3>
                                <p>Manager</p>
                            </div>
                     
                    </SwiperSlide> 
            
                    <SwiperSlide>
                       
                            <div className="teamimg">
                                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/5.jpg" alt="" />
                            </div>
                            <div className="teaminfo">
                                <h3>Olivia Smith</h3>
                                <p>Founder</p>
                            </div>
                     
                    </SwiperSlide> 
             
                     <SwiperSlide>
                       
                            <div className="teamimg">
                                <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/4.jpg" alt="" />
                            </div>
                            <div className="teaminfo">
                                <h3>Benjamin Martin</h3>
                                <p>Leader</p>
                            </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                       
                       <div className="teamimg">
                           <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/2.jpg" alt="" />
                       </div>
                       <div className="teaminfo">
                           <h3>William Dalin</h3>
                           <p>Co-Founder</p>
                       </div>
                   
               </SwiperSlide>
       
               <SwiperSlide>
                  
                       <div className="teamimg">
                           <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/3.jpg" alt="" />
                       </div>
                       <div className="teaminfo">
                           <h3>Amelia Martin</h3>
                           <p>Leader</p>
                       </div>
                 
               </SwiperSlide> 
     
               <SwiperSlide>
                  
                       <div className="teamimg">
                           <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/1.jpg" alt="" />
                       </div>
                       <div className="teaminfo">
                           <h3>Emma Welson</h3>
                           <p>Manager</p>
                       </div>
                
               </SwiperSlide> 
       
               <SwiperSlide>
                  
                       <div className="teamimg">
                           <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/5.jpg" alt="" />
                       </div>
                       <div className="teaminfo">
                           <h3>Olivia Smith</h3>
                           <p>Founder</p>
                       </div>
                
               </SwiperSlide> 
        
                <SwiperSlide>
                  
                       <div className="teamimg">
                           <img src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/user/4.jpg" alt="" />
                       </div>
                       <div className="teaminfo">
                           <h3>Benjamin Martin</h3>
                           <p>Leader</p>
                       </div>
                   
               </SwiperSlide>
                   
                </Swiper>
            </div>
        </section>
    )
}

export default Team