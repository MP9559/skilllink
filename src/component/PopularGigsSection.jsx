import React from "react";

const AppDesignCombinedSection = () => {
  const serviceCards = [
    {
      id: 1,
      seller: {
        username: "cc__creative",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: { bgImage: "/profilee.png" },
      },
      likes: "32.4K",
      title: "I will design UI UX for mobile app with figma for ios",
      rating: "5.0",
      reviews: "570",
      price: "US$500",
      image: "/image.png",
    },
    {
      id: 2,
      seller: {
        username: "creativesmith99",
        level: "Level 2 Seller",
        levelColor: "#74767e",
        avatar: { bgImage: "/profileee.png" },
      },
      likes: "3.4K",
      title: "I will create a professional business website design",
      rating: "4.8",
      reviews: "57",
      price: "US$700",
      image: "/frame-4.png",
    },
    {
      id: 3,
      seller: {
        username: "cc__creative",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: { bgImage: "/profilee.png" },
      },
      likes: "32.4K",
      title: "I will design UI UX for mobile app with figma for ios",
      rating: "5.0",
      reviews: "570",
      price: "US$600",
      image: "/frame-6.png",
    },
    {
      id: 4,
      seller: {
        username: "creativesmith99",
        level: "Level 2 Seller",
        levelColor: "#74767e",
        avatar: { bgImage: "/profileee.png" },
      },
      likes: "3.4K",
      title: "I will create a professional business website design",
      rating: "4.8",
      reviews: "57",
      price: "US$600",
      image: "/frame-9.png",
    },
    {
      id: 5,
      seller: {
        username: "cc__creative",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: { bgImage: "/profilee.png" },
      },
      likes: "32.4K",
      title: "I will design UI UX for mobile app with figma for ios",
      rating: "5.0",
      reviews: "570",
      price: "US$600",
      image: "/frame-11.png",
    },
  ];

  const popularGigs = [
    {
      id: 1,
      seller: {
        username: "ux_master",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: { bgImage: "/profilee.png" },
      },
      likes: "12.3K",
      title: "I will design mobile app UI UX design",
      rating: "4.9",
      reviews: "124",
      price: "US$300",
      image: "/app-design-1.png",
    },
    {
      id: 2,
      seller: {
        username: "designhub",
        level: "Level 2 Seller",
        levelColor: "#74767e",
        avatar: { bgImage: "/profileee.png" },
      },
      likes: "8.9K",
      title: "I will create modern mobile app UI design",
      rating: "4.8",
      reviews: "98",
      price: "US$250",
      image: "/app-design-2.png",
    },
    {
      id: 3,
      seller: {
        username: "pixel_vision",
        level: "Level 1 Seller",
        levelColor: "#1dbf73",
        avatar: { bgImage: "/profilee.png" },
      },
      likes: "15.1K",
      title: "I will design professional mobile app UI UX",
      rating: "4.9",
      reviews: "156",
      price: "US$400",
      image: "/app-design-1.png",
    },
    {
      id: 4,
      seller: {
        username: "ui_creator",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: { bgImage: "/profileee.png" },
      },
      likes: "6.5K",
      title: "I will create stunning app interface design",
      rating: "4.7",
      reviews: "87",
      price: "US$280",
      image: "/app-design-2.png",
    },
    {
      id: 5,
      seller: {
        username: "creativewave",
        level: "Level 2 Seller",
        levelColor: "#74767e",
        avatar: { bgImage: "/profilee.png" },
      },
      likes: "10.7K",
      title: "I will design modern mobile app UI UX",
      rating: "4.8",
      reviews: "112",
      price: "US$320",
      image: "/app-design-1.png",
    },
  ];

  const renderCard = (card) => (
    <div
      key={card.id}
      className="relative w-[262px] h-[359px] bg-white rounded-3xl overflow-hidden border border-[#e4e5e7]"
    >
      {/* Seller Info */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="relative w-6 h-6 rounded-xl overflow-hidden">
          <img
            src={card.seller.avatar.bgImage}
            alt={card.seller.username}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-semibold">{card.seller.username}</div>
          <div
            className="text-xs font-medium"
            style={{ color: card.seller.levelColor }}
          >
            {card.seller.level}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="absolute top-16 left-4 w-[247px] h-[148px] rounded-xl overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Likes */}
      <div className="absolute top-[221px] left-4 right-4">
        <div className="border-t border-[#efeff0] pt-2">
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 
                4 4 6.5 4c1.74 0 3.41 1.01 4.22 
                2.09C11.09 5.01 12.76 4 14.5 
                4 17 4 19 6 19 8.5c0 3.78-3.4 
                6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            {card.likes}
          </div>
        </div>
        <p className="text-sm font-medium mt-1">{card.title}</p>
      </div>

      {/* Rating & Price */}
      <div className="absolute flex flex-col bottom-5 left-4 right-4 justify-between items-start">
        <div className="text-xs text-yellow-400 font-bold">
          ★ {card.rating}
          <span className="text-gray-500 font-normal"> ({card.reviews})</span>
        </div>
        <div className="text-left flex flex-row gap-1 mt-2">
          <div className="text-[10px] mt-1 text-[#74767e]">STARTING AT</div>
          <div className="text-sm text-[#2e90eb]">{card.price}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-6 lg:px-28 py-10 bg-gray-50 space-y-14">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#404145]  mb-8">
        Most popular Gigs in <span className="text-[#446ee7]">App Design</span>
      </h2>

      {/* Popular Gigs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
        {popularGigs.map(renderCard)}
      </div>
      <h2 className="text-2xl font-bold text-[#404145]  mb-8">
       Gigs you may like
      </h2>
      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
        {serviceCards.map(renderCard)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
        {serviceCards.map(renderCard)}
      </div>
    </div>
  );
};

export default AppDesignCombinedSection;
