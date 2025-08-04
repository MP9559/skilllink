import React from "react";

const AppDesignSection = () => {
  const serviceCards = [
    {
      id: 1,
      seller: {
        username: "cc__creative",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: {
          letter: "C",
          bgColor: "#1b8996",
          bgImage: "/frame.png",
        },
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
        avatar: {
          letter: "C",
          bgColor: "#f85d5d",
          bgImage: "/frame-2.png",
        },
      },
      likes: "3.4K",
      title: "I will create a professional business website design",
      rating: "4.8",
      reviews: "57",
      price: "US$700",
      image: "/frame-4.png",
      overlayImage: "/frame-3.png",
    },
    {
      id: 3,
      seller: {
        username: "cc__creative",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: {
          letter: "C",
          bgColor: "#1b8996",
          bgImage: "/frame-5.png",
        },
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
        avatar: {
          letter: "C",
          bgColor: "#f85d5d",
          bgImage: "/frame-7.png",
        },
      },
      likes: "3.4K",
      title: "I will create a professional business website design",
      rating: "4.8",
      reviews: "57",
      price: "US$600",
      image: "/frame-9.png",
      overlayImage: "/frame-8.png",
    },
    {
      id: 5,
      seller: {
        username: "cc__creative",
        level: "Top Rated Seller",
        levelColor: "#2e90eb",
        avatar: {
          letter: "C",
          bgColor: "#1b8996",
          bgImage: "/frame-10.png",
        },
      },
      likes: "32.4K",
      title: "I will design UI UX for mobile app with figma for ios",
      rating: "5.0",
      reviews: "570",
      price: "US$600",
      image: "/frame-11.png",
    },
  ];

  const Avatar = (avatar) => (
    <div className="pt-[2.59px] pb-[4.41px] px-[7.5px] absolute top-[15px] left-[11px] bg-[#1b8996] rounded-xl overflow-hidden inline-flex items-start">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[11.8px] tracking-[0] leading-[16.8px] whitespace-nowrap">
        {avatar.letter}
      </div>
      <div
        className={`absolute w-6 h-6 top-0 left-0 rounded-xl ${avatar.bgColor !== "#1b8996" ? `bg-[${avatar.bgColor}]` : ""}`}
        style={{
          backgroundImage: `url(${avatar.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      />
    </div>
  );

  const renderCard = (card) => (
    <div
      key={card.id}
      className="relative w-[262px] h-[359px] bg-white rounded-3xl overflow-hidden border border-solid border-[#e4e5e7]"
    >
      <div className="absolute w-[260px] h-[54px] top-1 left-px">
        <div className="absolute w-[204px] h-[39px] top-2 left-[47px]">
          <div className="inline-flex items-start pl-0 pr-[2.41px] py-0 absolute top-0 left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#222325] text-sm tracking-[0] leading-[18px] whitespace-nowrap">
              {card.seller.username}
            </div>
          </div>
          <div
            className="absolute h-3 top-[21px] left-0 [font-family:'Inter-Medium',Helvetica] font-medium tracking-[0] leading-[18.7px] whitespace-nowrap"
            style={{
              color: card.seller.levelColor,
              width: card.seller.level === "Top Rated Seller" ? "98px" : "77px",
              fontSize:
                card.seller.level === "Top Rated Seller" ? "12.5px" : "12px",
              lineHeight:
                card.seller.level === "Top Rated Seller" ? "18.7px" : "21px",
            }}
          >
            {card.seller.level}
          </div>
          <div className="absolute w-[3px] h-[17px] top-2.5 left-[188px]">
            <div className="top-0 absolute w-[3px] h-[3px] left-0 bg-[#202020] rounded-[1.5px]" />
            <div className="top-[7px] absolute w-[3px] h-[3px] left-0 bg-[#202020] rounded-[1.5px]" />
            <div className="top-3.5 absolute w-[3px] h-[3px] left-0 bg-[#202020] rounded-[1.5px]" />
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col items-start gap-2 absolute top-[221px] left-0">
        <div className="relative w-[260px] h-[31px] border-t [border-top-style:solid] border-[#efeff0]">
          <div className="gap-[11px] absolute top-[7px] left-[25px] inline-flex items-start">
            <div className="relative w-[22px] h-[22px]">
              <div className="relative h-[22px]">
                {/* <img
                  className="absolute w-[22px] h-[19px] top-px left-0"
                  alt="Vector"
                  src={
                    card.id === 1
                      ? vector
                      : card.id === 2
                        ? vector2
                        : card.id === 3
                          ? vector4
                          : card.id === 4
                            ? vector6
                            : vector8
                  }
                /> */}
              </div>
            </div>
          </div>
          <div className="absolute h-[13px] top-[11px] left-[57px] opacity-50 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12.5px] tracking-[0] leading-[12.5px] whitespace-nowrap">
            {card.likes}
          </div>
        </div>
        <div className="relative w-[260px] h-[42px]">
          <p className="absolute w-[219px] h-[34px] top-[3px] left-6 [font-family:'Inter-Regular',Helvetica] font-normal text-[#222325] text-base tracking-[0] leading-[22px]">
            {card.title}
          </p>
        </div>
      </div>

      <div className="absolute w-[75px] h-3.5 top-[310px] left-6">
        <div className="absolute w-[15px] h-[15px] -top-0.5 left-0">
          <div className="relative h-[15px]">
            {/* <img
              className="absolute w-3.5 h-[13px] top-0 left-px"
              alt="Vector"
              src={
                card.id === 1
                  ? image
                  : card.id === 2
                    ? vector3
                    : card.id === 3
                      ? vector5
                      : card.id === 4
                        ? vector7
                        : vector9
              }
            /> */}
          </div>
        </div>
        <p className="absolute h-[21px] top-[-5px] left-5 [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-[21px] whitespace-nowrap">
          <span className="font-bold text-[#ffbe5b]">{card.rating} </span>
          <span className="[font-family:'Inter-Regular',Helvetica] text-[#b5b6ba]">
            ({card.reviews})
          </span>
        </p>
      </div>

      <div
        className={`${card.id === 2 || card.id === 4 ? "" : "w-[99px]"} absolute h-[13px] top-[${card.id === 2 || card.id === 4 ? "331" : "337"}px] left-6`}
      >
        <div className="absolute h-[5px] top-0.5 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#74767e] text-[6.2px] text-right tracking-[0.31px] leading-[12.5px] whitespace-nowrap">
          STARTING AT
        </div>
        <div
          className={`absolute ${card.id === 2 || card.id === 4 ? "h-[13px]" : "h-[9px]"} top-${card.id === 4 ? "[330px]" : "0"} left-[${card.id === 1 ? "51" : card.id === 2 ? "72" : card.id === 3 ? "50" : card.id === 4 ? "71" : "49"}px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#2e90eb] text-right tracking-[0] leading-[${card.id === 2 ? "12.5" : "14.4"}px] whitespace-nowrap`}
          style={{
            fontSize:
              card.id === 2 ? "10.6px" : card.id === 1 ? "11.3px" : "12.3px",
          }}
        >
          {card.price}
        </div>
      </div>

      <div className="absolute w-[247px] h-[148px] top-[61px] left-1.5">
        {card.overlayImage ? (
          <>
            <div className="absolute w-[247px] h-[148px] top-0 left-0">
              <div
                className="h-[148px] rounded-[7.59px]"
                style={{
                  backgroundImage: `url(${card.overlayImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                }}
              />
            </div>
            <div
              className="absolute w-[247px] h-[148px] top-0 left-0 rounded-[7.6px]"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            />
          </>
        ) : (
          <div
            className="rounded-[7.59px] w-full h-full"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="absolute top-[71px] left-0 inline-flex items-start">
      <div className="relative w-[1336px] h-[359px] overflow-hidden">
        <div className="gap-4 relative rounded-[23px] inline-flex items-start">
          {serviceCards.map((card) => renderCard(card))}
        </div>
      </div>
    </div>
  );
};


export default AppDesignSection