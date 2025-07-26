import React from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Cards = () => {
  const cards = [
    { id: 1, image: assets.programTech, title: "Programming & Tech" },
    { id: 2, image: assets.graphicDesign, title: "Graphic Design" },
    { id: 3, image: assets.dMarkit, title: "Digital Marketing" },
    { id: 4, image: assets.busenisse, title: "Business" },
    { id: 5, image: assets.musicAudio, title: "Music & Audio" },
    { id: 6, image: assets.aiServ, title: "AI Services" },
    { id: 7, image: assets.videoAnimation, title: "Video & Animation" },
    { id: 8, image: assets.writingTranslation, title: "Writing & Translation" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5 p-5">
      {cards.map((card) => (
        <Link to={`/card/${card.id}`} className="no-underline" key={card.id}>
          <div
            className="w-full h-[150px] bg-white rounded-3xl flex flex-col items-center justify-center gap-2 px-3 py-4"
            style={{ boxShadow: "0px 0px 51px -3px rgba(44, 50, 63, 0.28)" }}
          >
            <img src={card.image} alt={card.title} className="w-12 h-12 object-contain" />
            <p className="text-center text-sm font-medium">{card.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
