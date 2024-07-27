import Image from "next/image";

export default function IphoneAndWatch() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black px-12 text-white md:flex-row">
      <div className="w-full md:w-[40%]">
        <Image
          src="/images/iphone-apple-watch.jpg"
          alt="iphone apple watch"
          width={360}
          height={360}
          className="mx-auto h-auto w-auto"
        />
      </div>

      <div className="w-full md:w-[60%]">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Iphone and Apple Watch
        </h1>

        <p className="mx-auto w-full py-10">
          Misplaced your iPhone? The latest Apple Watch models can show you its
          approximate distance and direction.21 To set up a group photo on your
          iPhone, join the group and use Apple Watch as a viewfinder to snap the
          shot. And when you take a call on your Apple Watch, just tap your
          iPhone to continue the conversation there.
        </p>

        <p className="mx-auto w-full py-10">
          Looks tough. Because it is. Apple Watch Ultra 2 is crafted for
          unparalleled performance. The lightweight titanium case is rugged and
          corrosion resistant, and it&apos;s raised to protect the sapphire
          crystal from edge impacts.
        </p>

        <p className="mx-auto w-full py-10">
         The biggest and brightest Apple Watch display ever. Powered by the all-new S9 SiP, the Always‑On Retina display is 3000 nits at its peak, making it even more readable in harsh sunlight. In low-light situations, it dims to 1 nit. Night Mode now activates automatically in the dark. The large display gives you room to customize your view to suit almost any activity. And a new watch face shows dynamic info like altitude, depth, or seconds along the outermost edges.
        </p>

        <p className="font-bold text-1xl">Main features:</p>
        <p className="font-bold text-xl">49mm titanium case</p>
        <p className="font-bold text-xl">Water resistance 100m</p>
        <p className="font-bold text-xl">Tested to MIL-STD 810H1</p>
        <p className="font-bold text-xl">IP6X dust resistance</p>

      </div>
    </div>
  );
}
