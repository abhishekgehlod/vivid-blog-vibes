// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface CarouselItem {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   category: string;
// }

// const carouselItems: CarouselItem[] = [
//   {
//     id: 1,
//     title: "Spring 2024 Fashion Trends",
//     description:
//       "Discover the hottest fashion trends dominating runways and streets this spring season.",
//     image:
//       "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop",
//     category: "Trends",
//   },
//   {
//     id: 2,
//     title: "Sustainable Fashion Revolution",
//     description:
//       "How eco-conscious designers are reshaping the fashion industry with sustainable practices and materials.",
//     image:
//       "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=400&fit=crop",
//     category: "Sustainability",
//   },
//   {
//     id: 3,
//     title: "Haute Couture Masterpieces",
//     description:
//       "Exploring the artistry and craftsmanship behind the world's most exclusive haute couture collections.",
//     image:
//       "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=400&fit=crop",
//     category: "Couture",
//   },
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Auto-advance carousel
//   useEffect(() => {
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     // <div className="relative w-full h-[500px] overflow-hidden rounded-2xl group">
//     //   {/* Slides */}
//     //   <div className="relative h-full">
//     //     {carouselItems.map((item, index) => (
//     //       <div
//     //         key={item.id}
//     //         className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//     //           index === currentIndex
//     //             ? 'opacity-100 translate-x-0'
//     //             : index < currentIndex
//     //             ? 'opacity-0 -translate-x-full'
//     //             : 'opacity-0 translate-x-full'
//     //         }`}
//     //       >
//     //         <div className="relative h-full">
//     //           <img
//     //             src={item.image}
//     //             alt={item.title}
//     //             className="w-full h-full object-cover"
//     //           />
//     //           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
//     //           <div className="absolute inset-0 flex items-center">
//     //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//     //               <div className="max-w-lg text-white animate-slide-up">
//     //                 <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-4">
//     //                   {item.category}
//     //                 </span>
//     //                 <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//     //                   {item.title}
//     //                 </h2>
//     //                 <p className="text-lg md:text-xl mb-8 text-gray-200">
//     //                   {item.description}
//     //                 </p>
//     //                 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
//     //                   Read More
//     //                 </Button>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>

//     //   {/* Navigation Arrows */}
//     //   <Button
//     //     variant="ghost"
//     //     size="icon"
//     //     onClick={prevSlide}
//     //     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
//     //   >
//     //     <ChevronLeft className="h-6 w-6" />
//     //   </Button>
//     //   <Button
//     //     variant="ghost"
//     //     size="icon"
//     //     onClick={nextSlide}
//     //     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
//     //   >
//     //     <ChevronRight className="h-6 w-6" />
//     //   </Button>

//     //   {/* Dots Indicator */}
//     //   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
//     //     {carouselItems.map((_, index) => (
//     //       <button
//     //         key={index}
//     //         onClick={() => goToSlide(index)}
//     //         className={`w-3 h-3 rounded-full transition-all duration-300 ${
//     //           index === currentIndex
//     //             ? 'bg-white scale-125'
//     //             : 'bg-white/50 hover:bg-white/70'
//     //         }`}
//     //       />
//     //     ))}
//     //   </div>
//     // </div>
//     <div className="relative w-full h-[500px] overflow-hidden rounded-2xl group perspective">
//       {/* Slides */}
//       <div className="relative h-full">
//         {carouselItems.map((item, index) => {
//           const isActive = index === currentIndex;
//           const isPast = index < currentIndex;

//           return (
//             <div
//               key={item.id}
//               className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform-gpu`}
//               style={{
//                 transform: isActive
//                   ? "rotateY(0deg)"
//                   : isPast
//                   ? "rotateY(-90deg)"
//                   : "rotateY(90deg)",
//                 opacity: isActive ? 1 : 0,
//                 transformOrigin: isPast ? "left center" : "right center",
//                 perspective: "1200px",
//               }}
//             >
//               <div className="relative w-full h-full rounded-2xl shadow-lg overflow-hidden">
//                 {/* Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

//                 {/* Page curl shadow */}
//                 {!isActive && (
//                   <div
//                     className={`absolute top-0 ${
//                       isPast ? "left-0" : "right-0"
//                     } h-full w-1/3 pointer-events-none`}
//                     style={{
//                       background: isPast
//                         ? "linear-gradient(to right, rgba(0,0,0,0.3), transparent)"
//                         : "linear-gradient(to left, rgba(0,0,0,0.3), transparent)",
//                       opacity: 1,
//                       transition: "opacity 0.7s ease-in-out",
//                     }}
//                   />
//                 )}

//                 {/* Content */}
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//                     <div className="max-w-lg text-white animate-slide-up">
//                       <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-4">
//                         {item.category}
//                       </span>
//                       <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                         {item.title}
//                       </h2>
//                       <p className="text-lg md:text-xl mb-8 text-gray-200">
//                         {item.description}
//                       </p>
//                       <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
//                         Read More
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation Arrows */}
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </Button>
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </Button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
//         {carouselItems.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-white scale-125"
//                 : "bg-white/50 hover:bg-white/70"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Button } from "@/components/ui/button"; // adjust path
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg",
    category: "Travel",
    title: "Explore The World",
    description: "Discover hidden gems and experience breathtaking views.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6766233/pexels-photo-6766233.jpeg",
    category: "Lifestyle",
    title: "Healthy Living",
    description: "Tips and tricks for a balanced and mindful lifestyle.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6766236/pexels-photo-6766236.jpeg",
    category: "Technology",
    title: "Future of Tech",
    description: "Explore AI, VR, and innovations shaping our future.",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg",
    category: "Technology",
    title: "Future of Tech",
    description: "Explore AI, VR, and innovations shaping our future.",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7778034/pexels-photo-7778034.jpeg",
    category: "Technology",
    title: "Future of Tech",
    description: "Explore AI, VR, and innovations shaping our future.",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/7774251/pexels-photo-7774251.jpeg",
    category: "Technology",
    title: "Future of Tech",
    description: "Explore AI, VR, and innovations shaping our future.",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/8527751/pexels-photo-8527751.jpeg",
    category: "Technology",
    title: "Future of Tech",
    description: "Explore AI, VR, and innovations shaping our future.",
  },
];

const Carousel = () => {
  const flipBook = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers
  const prevSlide = () => {
    flipBook.current.pageFlip().flipPrev();
  };

  const nextSlide = () => {
    flipBook.current.pageFlip().flipNext();
  };

  // Sync dots with page
  const onFlip = (e: any) => {
    setCurrentIndex(e.data);
  };

  // ✅ Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (flipBook.current) {
        const total = carouselItems.length;
        const nextPage = (currentIndex + 1) % total;
        flipBook.current.pageFlip().flip(nextPage);
      }
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Flipbook */}
      <HTMLFlipBook
        width={1000}
        height={500}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={600}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        className="rounded-2xl shadow-xl overflow-hidden"
        onFlip={onFlip}
        ref={flipBook}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="relative w-full h-full">
            {/* Background image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-lg text-white">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full mb-4">
                    {item.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-gray-200">
                    {item.description}
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => flipBook.current.pageFlip().flip(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
