"use client";

import { useEffect, useState } from "react";

export default function LeftText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;
      const scrollY = window.scrollY;

      // console.log("FULLSCREN", fullHeight);
      // console.log("windowHeight", windowHeight);
      // console.log("scrollY", scrollY);

      const scrollPercentage = (scrollY / (fullHeight - windowHeight)) * 100;

      console.log(scrollPercentage); // buradaki degere gore div elementimiz gorunecek


      if (scrollPercentage >= 50) {
        setIsVisible(true);
      } else {
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
    <div className={`sticky top-1/2 translate-y-1/2 -left-8 `}>
      <div className="absolute top-1/2 translate-y-1/2 2xl:-left-14 3xl:-left-8 uppercase w-64 -rotate-90 dark:text-neutral-600 hidden md:block select-none">
        <div className="2xl:text-8xl 3xl:text-9xl font-black tracking-[-10px]">developer</div>
        <div className="2xl:text-7xl 3xl:text-8xl font-black tracking-[-10px]">designer</div>
      </div>
    </div>
  );
}

/*
 * Hem sabit kalmasini (y scroll) hemde absolute olmasini istedigimiz icin
 *  */
