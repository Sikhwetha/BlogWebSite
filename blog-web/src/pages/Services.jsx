import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";

const slides = [
  {
    image:
      "https://cdn.pixabay.com/photo/2020/05/28/15/56/digitization-5231610_1280.jpg?text=Slide+1",
    title: "Web Design",
    description:
      "We design visually stunning and highly functional websites that captivate users. Combining aesthetics with usability, we create responsive interfaces tailored to your brand. Let us bring your vision to life with a website that stands out.",
    button: "Learn More",
    link: "#",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/06/09/20/38/woman-1446557_640.jpg?text=Slide+2",
    title: "App Development",
    description:
      "We specialize in developing dynamic and user-friendly apps that elevate your digital presence. Our focus on seamless performance and intuitive design ensures an exceptional user experience. Let us turn your ideas into powerful, engaging mobile applications.",
    button: "Learn More",
    link: "#",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg?text=Slide+2",
    title: "Responsive Website",
    description:
      "We create responsive websites that deliver a seamless experience across all devices. Our designs ensure optimal performance and user engagement, whether on desktop, tablet, or mobile. Let us help your site stand out with a sleek, adaptable interface.",
    button: "Learn More",
    link: "#",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/01/21/10/53/marketing-6954458_1280.jpg?text=Slide+3",
    title: "Branding",
    description:
      "We specialize in crafting compelling brand identities that resonate with your audience. From logo design to brand strategy, we create cohesive and memorable experiences. Let us help you build a strong and recognizable brand that leaves a lasting impression.",
    button: "Learn More",
    link: "#",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlideTimer();
    return stopSlideTimer;
  }, []);

  useEffect(() => {
    isPaused ? stopSlideTimer() : startSlideTimer();
  }, [isPaused]);

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  return (
    <div className="relative w-full h-[230px] pb-[56.25%] mt-[60px] md:mt-[66px] mb-[30px]">
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-center text-white p-4 shadow-2xl">
                <div className="w-[310px] md:w-[550px] ml-[5px] md:ml-20 md:mt-[-200px]">
                  <h2 className=" text-2xl md:text-5xl font-bold mb-[5px] text-orange-500 md:mb-[30px]">
                    {slide.title}
                  </h2>
                  <p className="mb-4 md:mb-[34px] text-sm md:text-[20px] leading-snug font-primary">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="bg-green-500 text-white py-2 px-2 md:px-4 rounded hover:bg-blue-700"
                  >
                    {slide.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
    </div>
  );
};

export default Services;
