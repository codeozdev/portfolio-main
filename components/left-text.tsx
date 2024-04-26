"use client";

import { useEffect, useState } from "react";

export default function LeftText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sayfa boyutunu al
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
      const scrollY = window.scrollY;

      // console.log("FULLSCREN", fullHeight);
      // console.log("windowHeight", windowHeight);
      // console.log("scrollY", scrollY);

      // Sayfa boyunun %20'si, 0.2 ile çarpılır
      const scrollPercentage = (scrollY / (fullHeight - windowHeight)) * 100;

      console.log(scrollPercentage); // buradaki degere gore div elementimiz gorunecek


      // Eğer scroll yüzde 20'den küçükse veya yüzde 100'e eşitse, elementi görünür yap
      if (scrollPercentage >= 40) {
        setIsVisible(true);
      } else {
        // Scroll yüzde 20 ila 100 arasındaysa, elementi gizle
        setIsVisible(false);
      }
    };

    // Sayfa scroll edildiğinde handleScroll fonksiyonunu çağır
    window.addEventListener("scroll", handleScroll);

    // Component unmount edildiğinde event listener'ı temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-1/2 translate-y-1/2 -left-8 ${isVisible ? "" : "hidden"}`}>
      <div className="absolute top-1/2 translate-y-1/2 -left-8 uppercase w-64 -rotate-90 dark:text-neutral-600 hidden md:block select-none">
        <div className="text-9xl font-black tracking-[-10px]">developer</div>
        <div className=" text-8xl font-black tracking-[-10px]">designer</div>
      </div>
    </div>
  );
}

/*
 * Hem sabit kalmasini (y scroll) hemde absolute olmasini istedigimiz icin
 *  */
