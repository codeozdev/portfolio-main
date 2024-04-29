import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Link from "next/link";

export default function MyContainer() {

  const li = `hover:scale-110 duration-500 ease-in-out cursor-pointer border border-red-500 dark:border-[#8750F7] rounded-full fill-[#8750F7] p-2`;
  const mid = `md:max-w-[400px] md:max-h-[440px]`;
  const isDark = `dark:bg-[#140C1C] dark:border-[#8650F6] dark:border`;


  return (
    <div className="w-full h-full relative mt-5 md:mt-10">
      <div className="relative z-20">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 place-items-center container">
          <div className="w-full h-fit space-y-5 flex justify-center md:justify-start md:items-start flex-col items-center text-center md:text-start">
            <h3>I am Oguz</h3>
            {/*MOBILE IMAGE*/}
            <Image
              src="/photo.png"
              alt="img"
              width={500}
              height={500}
              className={`max-w-40 max-h-40 object-cover object-top grayscale hover:grayscale-0 rounded-full md:hidden w-full ${mid} ${isDark}`}
              sizes="60vw"
            />
            <h1 className="max-w-[300px] md:max-w-[600px] tracking-wider leading-tight">
              Web Developer + UX Designer
            </h1>
            <p className="font-sora text-center md:text-start text-base md:text-lg tracking-wide md:min-w-[700px]">
              I have been working in both frontend and backend development for 1.5 years, and I am passionate about keeping up with industry inn ovations and adapting to new technologies. I am confident in my ability to solve problems and produce efficient solutions.
            </p>
            <ul className="flex gap-5 items-center md:justify-start justify-center">
              <li className={li}>
                <Link href="#">
                  <BsTwitterX />
                </Link>
              </li>
              <li className={li}>
                <Link href="#">
                  <BsLinkedin />
                </Link>
              </li>
              <li className={li}>
                <Link href="#">
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Image
              src="/photo.png"
              alt="img"
              width={500}
              height={500}
              className={`max-w-52 max-h-max object-cover grayscale hover:rotate-0 rotate-6 transition-all duration-300 ease-in-out hover:grayscale-0 rounded-3xl  ${mid} ${isDark}`}
              sizes="60vw"
            />
          </div>
        </div>
      </div>
      {/*overlay*/}
      <div className="dark:bg-[url('/Untitled.jpg')] h-full w-full absolute inset-0 bg-left dark:animate-pulse" />
      <div className="dark:absolute inset-0 w-full h-full dark-gradient" />
    </div>
  );
}
//dark:absolute  vermemizin sebebi dark-gradient custom css'e dark mod olarak atayamadigimizdan dolayi

/*
 * Textlerin secimini kapat
 *
 *  */
