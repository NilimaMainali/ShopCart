import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import PopularPost from './PopularPost';
import Tags from './Tags';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const result = product.filter((p) => p.id === id);
  // console.log(result);
  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop/single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify content center">
            {/* Left Side */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-cointainer pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            Loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextvEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {
                            result.map(item => <ProductDisplay key={item.id} item={item}/>)
                          }
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                {/* reviews */}
                <div className="review">
                <Review/>
                </div>
              </article>
            </div>
            {/* Right Side */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost/>
                <Tags/>

              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
