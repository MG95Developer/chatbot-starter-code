import Image from "next/image";

export default function IphoneAndMac() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black px-12 text-white md:flex-row">
      <div className="w-full md:w-[40%]">
        <Image
          src="/images/iphone-mac.jpg"
          alt="iphone apple watch"
          width={500}
          height={500}
          className="mx-auto h-auto w-auto"
          priority
        />
      </div>

      <div className="w-full md:w-[60%]">
        <h1 className="text-3xl font-bold lg:text-6xl">Iphone and Mac</h1>

        <p className="mx-auto w-full py-10">
          Three giant leaps. MacBook Pro blasts forward with the M3, M3 Pro, and
          M3 Max chips. Built on 3‑nanometer technology and featuring an all-new
          GPU architecture, they’re the most advanced chips ever built for a
          personal computer. And each one brings more pro performance and
          capability.
        </p>

        <p className="mx-auto w-full py-10">
          Behold an entirely new class of GPU architecture. And the biggest
          breakthrough in graphics yet for Apple silicon. Dynamic Caching
          optimizes fast on-chip memory to dramatically increase average GPU
          utilization — driving a huge performance boost for the most demanding
          pro apps and games.
        </p>

        <p className="mx-auto w-full py-10">
          Games will look more detailed than ever thanks to hardware-accelerated
          mesh shading. This brings greater capability and efficiency to
          geometry processing, enabling games to render more visually complex
          scenes.
        </p>

        <p className="mx-auto w-full py-10">
          MacBook Pro has the longest battery life ever in a Mac — up to 22
          hours. That efficiency is the magic of Apple silicon. And all models
          remain just as fast whether plugged in or not. So wherever inspiration
          strikes or whenever duty calls, run with it.
        </p>
      </div>
    </div>
  );
}
