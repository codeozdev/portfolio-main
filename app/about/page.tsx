import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/*IMAGE*/}
      <div className="avatar">
        <div className="relative size-64 rounded-xl ring dark:ring-green-500 dark:ring-offset-green-500 ring-offset-4">
          <Image
            src="/photo.png"
            alt="foto"
            className="object-cover object-top rounded-xl"
            fill
            sizes="60vw"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold">Oğuzhan Uğuz</h3>
        <div className="uppercase mb-3">
          Web Developer{" "}
          <span className="text-primary font-bold dark:text-green-500">IN ANKARA</span>
        </div>
        <p className="tracking-wider">
          I have been working in both frontend and backend development for 1.5 years, and I am
          passionate about keeping up with industry inn ovations and adapting to new technologies. I
          am confident in my ability to solve problems and produce efficient solutions.
        </p>
      </div>
    </div>
  );
}
