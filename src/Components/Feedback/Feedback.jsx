import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import Featured from "../Featured/Featured";

const Feedback = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("/researchPaper.json")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-10 text-pink-600">
        Feedback & Rating
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {ratings.map((rating) => (
          <>
            <SwiperSlide>
              <div className="flex flex-col items-center px-20">
                <Rating style={{ maxWidth: 180 }} value={rating.review} readOnly />
                <p className="text-center">{rating.feedback}</p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <Featured></Featured>
    </div>
  );
};

export default Feedback;
