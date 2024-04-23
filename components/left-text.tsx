export default function LeftText() {
  return (
    <div className="sticky top-1/2 translate-y-1/2 -left-8">
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
