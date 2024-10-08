import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
    return (
      <section>
        <SectionTitle 
          subHeading={"From 11:00 AM to 10:00 PM"}
          heading={"Order Online"}
        >

        </SectionTitle>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide className='mb-20'>
            <img src={img1} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Salads</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Soups</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Desserts</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Salads</h3>
          </SwiperSlide>
          
         
          
          
        </Swiper>
      </section>
    );
};

export default Category;