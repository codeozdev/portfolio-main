import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Link from "next/link";

export default function MyContainer() {
  const li = `hover:scale-110 duration-500 ease-in-out cursor-pointer border border-[#8750F7] rounded-full fill-[#8750F7] p-2`;

  return (
    <div className="w-full h-full relative">
      <div className="p-10 relative z-20">
        <div className="grid grid-cols-2 place-items-center">
          <div className="w-full h-fit">
            <h3>I am Oguz</h3>
            <h1 className="max-w-[600px] tracking-wider leading-tight">
              Web Developer + UX Designer
            </h1>
            <p className="font-sora text-xl tracking-wide min-w-[500px]">
              I break down complex user experinece problems to create integritiy focussed solutions
              that connect billions of people
            </p>

            <ul className="flex gap-5 mt-10 ">
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
          <div>
            <Image
              src="/photo.png"
              alt="img"
              width={500}
              height={500}
              className={`max-w-[400px] max-h-[440px] object-cover dark:bg-[#140C1C] dark:border-[#8650F6] dark:border rounded-3xl grayscale hover:rotate-0 rotate-6 transition-all duration-300 ease-in-out hover:grayscale-0`}
              sizes="60vw"
            />
          </div>
        </div>
      </div>
      {/*overlay*/}
      <div className="bg-[url('/Untitled.jpg')] h-full w-full absolute inset-0 animate-pulse" />
      <div className="bg-black/60 absolute inset-0 w-full h-full" />
    </div>
  );
}

//border border-[#8750F7] size-8 rounded-full fill-[#8750F7]
// <div className="bg-black/80 absolute inset-0 w-full h-full"></div>
