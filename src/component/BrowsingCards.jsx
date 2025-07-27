// // src/components/BrowsingCards.jsx

// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { ChevronRight, Heart, MoreVertical, Star } from "lucide-react";
// import React from "react";

// const cardData = [
//   {
//     seller: {
//       name: "cc__creative",
//       level: "Top Rated Seller",
//       levelColor: "text-[#2e90eb]",
//       avatar: "C",
//       avatarBg: "bg-[#1b8996]",
//     },
//     likes: "32.4K",
//     description: "I will design UI UX for mobile app with figma for ios",
//     rating: "5.0",
//     reviews: "570",
//     price: "US$120",
//     imageBg: "bg-[url(/image.png)]",
//   },
//   {
//     seller: {
//       name: "creativesmith99",
//       level: "Level 2 Seller",
//       levelColor: "text-[#74767e]",
//       avatar: "C",
//       avatarBg: "bg-[#f85d5d]",
//     },
//     likes: "3.4K",
//     description: "I will create a professional business website design",
//     rating: "4.8",
//     reviews: "57",
//     price: "US$200",
//     imageBg: "bg-[url(/frame-4.png)]",
//   },
//   {
//     seller: {
//       name: "cc__creative",
//       level: "Top Rated Seller",
//       levelColor: "text-[#2e90eb]",
//       avatar: "C",
//       avatarBg: "bg-[#1b8996]",
//     },
//     likes: "32.4K",
//     description: "I will design UI UX for mobile app with figma for ios",
//     rating: "5.0",
//     reviews: "570",
//     price: "US$350",
//     imageBg: "bg-[url(/frame-6.png)]",
//   },
//   {
//     seller: {
//       name: "creativesmith99",
//       level: "Level 2 Seller",
//       levelColor: "text-[#74767e]",
//       avatar: "C",
//       avatarBg: "bg-[#f85d5d]",
//     },
//     likes: "3.4K",
//     description: "I will create a professional business website design",
//     rating: "4.8",
//     reviews: "57",
//     price: "US$80",
//     imageBg: "bg-[url(/frame-9.png)]",
//   },
//   {
//     seller: {
//       name: "cc__creative",
//       level: "Top Rated Seller",
//       levelColor: "text-[#2e90eb]",
//       avatar: "C",
//       avatarBg: "bg-[#1b8996]",
//     },
//     likes: "32.4K",
//     description: "I will design UI UX for mobile app with figma for ios",
//     rating: "5.0",
//     reviews: "570",
//     price: "US$120",
//     imageBg: "bg-[url(/frame-11.png)]",
//   },
// ];

// const BrowsingCards = () => {
//   return (
//     <section className="relative w-full max-w-[1480px] h-auto">
//       <div className="w-full h-auto bg-white shadow-[2px_2px_24px_#00000026] rounded-lg p-6">
//         <div className="max-w-[1336px] mx-auto">
//           <header className="flex justify-between items-center mb-6">
//             <div className="flex items-center gap-2">
//               <h2 className="font-bold text-xl text-[#404145]">Continue browsing</h2>
//               <Button variant="ghost" size="icon" className="h-auto p-0">
//                 <ChevronRight className="h-4 w-4 text-[#404145]" />
//               </Button>
//             </div>

//             <div className="flex gap-2">
//               <Button variant="outline" size="sm" className="h-10 rounded-full">All</Button>
//               <Button variant="ghost" size="sm" className="h-10 rounded-full">Web Design</Button>
//               <Button variant="ghost" size="sm" className="h-10 rounded-full">Mobile App</Button>
//             </div>
//           </header>

//           <ScrollArea className="w-full">
//             <div className="flex space-x-4 pb-6">
//               {cardData.map((card, index) => (
//                 <Card
//                   key={index}
//                   className="w-[262px] h-[359px] rounded-3xl border border-[#e4e5e7] flex-shrink-0"
//                 >
//                   <div className="p-1">
//                     <div className="flex items-center h-[54px]">
//                       <Avatar className={`${card.seller.avatarBg} h-6 w-6 text-white text-xs font-semibold`}>
//                         <AvatarFallback className={card.seller.avatarBg}>
//                           {card.seller.avatar}
//                         </AvatarFallback>
//                       </Avatar>

//                       <div className="ml-3 flex-1">
//                         <p className="font-semibold text-sm text-[#222325]">
//                           {card.seller.name}
//                         </p>
//                         <p className={`text-xs ${card.seller.levelColor}`}>
//                           {card.seller.level}
//                         </p>
//                       </div>

//                       <Button variant="ghost" size="icon" className="h-auto p-0">
//                         <MoreVertical className="h-4 w-4" />
//                       </Button>
//                     </div>

//                     <div className={`w-full h-[148px] mt-2 rounded-[7.59px] ${card.imageBg} bg-cover bg-center`} />

//                     <CardContent className="p-0 mt-3">
//                       <div className="border-t border-[#efeff0] py-2 px-6 flex items-center">
//                         <Heart className="h-5 w-5 text-gray-500" />
//                         <span className="ml-2 text-xs opacity-50">{card.likes}</span>
//                       </div>

//                       <p className="px-6 text-base text-[#222325] leading-[22px]">
//                         {card.description}
//                       </p>

//                       <div className="mt-4 px-6 flex items-center">
//                         <Star className="h-3.5 w-3.5 text-[#ffbe5b] fill-[#ffbe5b]" />
//                         <span className="ml-2 text-xs">
//                           <span className="font-bold text-[#ffbe5b]">{card.rating} </span>
//                           <span className="text-[#b5b6ba]">({card.reviews})</span>
//                         </span>
//                       </div>

//                       <div className="mt-4 px-6">
//                         <span className="text-[6.2px] font-bold text-[#74767e] tracking-[0.31px]">
//                           STARTING AT
//                         </span>
//                         <span className="ml-2 text-[#2e90eb] text-xs">
//                           {card.price}
//                         </span>
//                       </div>
//                     </CardContent>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//             <ScrollBar orientation="horizontal" />
//           </ScrollArea>

//           <div className="flex justify-center mt-6 gap-2">
//             <div className="w-9 h-[7px] bg-[#1e88e5] rounded-[5.83px]" />
//             <div className="w-7 h-[7px] bg-[#9d9d9d] rounded-[5.83px]" />
//             <div className="w-7 h-[7px] bg-[#9d9d9d] rounded-[5.83px]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrowsingCards;
