import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    bgColor: "bg-white",
    image: "./Testimonial.jpg",
    text: "Clean Office, Happy Team! We’ve received nothing but compliments from both staff and clients on how clean and organized our office. It’s made such a difference in our workplace morale",
    name: "Yashika Wanjari",
  },
  {
    bgColor: "bg-[#c1dbe4]",
    image: "./Testimonial1.jpg",
    text: "Stress-Free and Sparkling Clean! I have never been more impressed with a cleaning service! It feels amazing to come home to a clean house without having to worry about it!",
    name: "Shivang Raj",
  },
  {
    bgColor: "bg-[#c1e4c4]",
    image: "./Testimonial2.jpg",
    text: "Thorough and Trustworthy! I was hesitant to hire a cleaning service, but after seeing the results, I’m so glad I did. They take care of my house with such care.",
    name: "Pooja Chandewar",
  },
  {
    bgColor: "bg-white",
    image: "./Testimonial3.jpg",
    text: "Professional and Detailed! Our office has never looked better! The cleaners are punctual, and their attention to high-traffic areas is exactly what we needed. Great value and service!",
    name: "Anshul Hanwante",
  },
  {
    bgColor: "bg-[#c1dbe4]",
    image: "./Testimonial4.jpg",
    text: "Impeccable Service! We’ve been using this cleaning service for our office for over a year now, and the results are always impressive. Highly recommend!",
    name: "Vaishnavi Rewatkar",
  },
  {
    bgColor: "bg-[#c1e4c4]",
    image: "./Testimonial6.jpg",
    text: "A Life-Changer for Our Home! As a busy dad, keeping up with the housework can be overwhelming, but this cleaning service has been a lifesaver and the team is so friendly and respectful",
    name: "Rutuja Bankar",
    },
    {
        bgColor: "bg-[#c1dbe4]",
        image: "./Testimonial7.jpg",
        text: "Professional and Detailed! Our office has never looked better! The cleaners are punctual, and their attention to high-traffic areas is exactly what we needed. Great value and service!",
        name: "Krushant Rahane"
    }
];

// Custom Navigation Button Component
const CustomArrow = ({ className, onClick, style, direction }) => (
  <button
    className={`absolute  z-10 flex items-center justify-center bottom-0 w-10 h-10 bg-gray-800 text-white rounded-full ${
      direction === "prev" ? "right-[55%]" : "right-[40%]"
    } shadow-lg hover:bg-gray-700`}
    onClick={onClick}
    style={{
      ...style,
      bottom: "2px", // Adjust the bottom positioning
      margin: "0 10px", // Add margin between buttons
    }}
  >
    {direction === "prev" ? "❮" : "❯"}
  </button>
);

const TestimonialPage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24  flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h2 className="lg:text-4xl  mb-8 font-thin ">Real Stories From Real Homes</h2>
      <div className="w-full testimonial-container max-w-6xl relative ">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" py-32">
              <div
                className={`p-6 rounded-[60px] shadow-lg w-[350px] h-[500px] flex flex-col items-center text-center ${testimonial.bgColor}`}
              >
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-24 h-24  rounded-full mb-4"
                />
                <p className="text-gray-700 mb-6 mt-12 text-xl">{testimonial.text}</p>
                <h3 className="text-lg font-semibold mt-12 text-gray-800">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialPage;
