import React from "react";
import { motion } from "framer-motion";


const serviceCards = [
  {
    id: 1,
    username: "cc__creative",
    userLevel: "Top Rated Seller",
    userLevelColor: "#2e90eb",
    avatarBg: "#1b8996",
    image: "/image.png",
    title: "I will design UI UX for mobile app with figma for ios",
    likes: "32.4K",
    rating: "4.3",
    reviews: "(570)",
    price: "US$120",
    vectorIcon: "/heart.png",
    starIcon: "/star.png",
  },
  {
    id: 2,
    username: "creativesmith99",
    userLevel: "Level 2 Seller",
    userLevelColor: "#74767e",
    avatarBg: "#f85d5d",
    image: "/frame-4.png",
    title: "I will create a professional business website design",
    likes: "3.4K",
    rating: "4.8",
    reviews: "(57)",
    price: "US$200",
    vectorIcon: "/heart.png",
    starIcon: "/star.png",
  },
  {
    id: 3,
    username: "cc__creative",
    userLevel: "Top Rated Seller",
    userLevelColor: "#2e90eb",
    avatarBg: "#1b8996",
    image: "/frame-6.png",
    title: "I will design UI UX for mobile app with figma for ios",
    likes: "32.4K",
    rating: "4.5",
    reviews: "(570)",
    price: "US$350",
    vectorIcon: "/heart.png",
    starIcon: "/star.png",
  },
  {
    id: 4,
    username: "creativesmith99",
    userLevel: "Level 2 Seller",
    userLevelColor: "#74767e",
    avatarBg: "#f85d5d",
    image: "/frame-9.png",
    title: "I will create a professional business website design",
    likes: "3.4K",
    rating: "4.7",
    reviews: "(57)",
    price: "US$80",
    vectorIcon: "/heart.png",
    starIcon: "/star.png",
  },
  {
    id: 5,
    username: "cc__creative",
    userLevel: "Top Rated Seller",
    userLevelColor: "#2e90eb",
    avatarBg: "#1b8996",
    image: "/frame-11.png",
    title: "I will design UI UX for mobile app with figma for ios",
    likes: "32.4K",
    rating: "5.0",
    reviews: "(570)",
    price: "US$120",
    vectorIcon: "/heart.png",
    starIcon: "/star.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const ServiceCard = ({ card, index }) => (
  <motion.article
    custom={index}
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    whileHover={{
      scale: 1.05,
      y: -6,
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    }}
    className="w-[262px] h-[359px] bg-white rounded-3xl border border-[#e4e5e7] overflow-hidden overflow-y-hidden relative transition-all cursor-pointer"
  >
    <div className="absolute top-1 left-1 w-[260px] h-[54px] flex justify-between px-2">
      <div className="flex items-start gap-2 mt-2 ml-2">
        <div
          className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
          style={{ backgroundColor: card.avatarBg }}
        >
          {card.username[0].toUpperCase()}
        </div>
        <div>
          <h3 className="text-sm font-semibold">{card.username}</h3>
          <p className="text-xs" style={{ color: card.userLevelColor }}>
            {card.userLevel}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 mt-2 mr-2">
        <div className="w-1 h-1 bg-black rounded-full" />
        <div className="w-1 h-1 bg-black rounded-full" />
        <div className="w-1 h-1 bg-black rounded-full" />
      </div>
    </div>

    <div
      className="w-[247px] h-[148px] mt-[60px] mx-auto rounded-md bg-cover bg-center"
      style={{ backgroundImage: `url(${card.image})` }}
    ></div>

    <div className="px-4 mt-4">
      <p className="text-base font-medium text-[#222325] leading-5 font-poppins">
        {card.title}
      </p>
    </div>

    <div className="flex items-center mt-4 px-4">
      <img src={card.vectorIcon} alt="likes" className="w-[22px] h-[19px]" />
      <span className="ml-2 text-sm text-black opacity-50">{card.likes}</span>
    </div>

    <div className="flex items-center mt-2 px-4">
      <img src={card.starIcon} alt="rating" className="w-4 h-4" />
      <span className="ml-2 text-xs font-bold text-[#ffbe5b]">{card.rating}</span>
      <span className="ml-1 text-xs text-[#b5b6ba]">{card.reviews}</span>
    </div>

    <div className="px-4 mt-3">
      <p className="text-[10px] text-[#74767e] font-bold tracking-wider">
        STARTING AT <span className="text-[#2e90eb] font-normal">{card.price}</span>
      </p>
    </div>
  </motion.article>
);

const SuggestionForm = () => {
  

  return (
    <div className="mt-16 px-16">
      

      {/* Service Cards */}
      <div className="bg-white shadow-[2px_2px_24px_#00000026] mb-24 py-8 px-4 rounded-xl">
        <h2 className="text-xl font-bold text-[#404145] mb-6 font-poppins">
          Continue browsing
        </h2>
        <div className="overflow-x-hidden overflow-y-hidden">
          <div className="flex flex-row gap-2">
            {serviceCards.map((card, index) => (
              <ServiceCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionForm;
