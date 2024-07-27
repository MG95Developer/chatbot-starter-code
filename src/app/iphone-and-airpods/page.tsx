import Image from "next/image";

export default function IphoneAndAirpods() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black px-12 text-white md:flex-row">
      <div className="w-full md:w-[40%]">
        <Image
          src="/images/iphone-airpods.jpg"
          alt="iphone-and-airpods"
          width={360}
          height={360}
          className="w-auto h-auto mx-auto"
         
        />
      </div>

      <div className="w-full md:w-[60%]">
        <h1 className="text-3xl font-bold lg:text-6xl">Iphone and AirPods</h1>

        <p className="mx-auto w-full py-10">
          Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio,
          which automatically tailors the noise control to provide the best
          listening experience across different environments and interactions
          throughout the day.
        </p>

        <p className="py-5 font-bold text-lg">
        AirPods Pro (2nd generation)
        </p>

        <p className="text-sm py-5">An inward-facing microphone works with voice enhancement algorithms to recognize and articulate your voice, so your phone and video calls always sound completely natural.</p>

        <p className="text-sm py-5">A custom-built driver and amplifier work with the H2 chip to provide lower distortion during playback, so you’ll hear deeper bass and crisper highs — across all volume levels.</p>

        <p className="text-sm py-5">Noise-cancelling microphones and a rear vent are optimally placed to quickly detect sound coming in, working together to counter noise before it reaches your ear.</p>

        <p className="text-sm py-5">A driver and acoustic algorithms help Active Noise Cancellation reduce more unwanted noise. With control over what you hear — and don’t hear — you can immerse yourself in music and podcasts, or simply stay focused, like never before.</p>

        <p className="text-sm py-5">Four pairs of silicone tips are included to fit a wide range of ears. The tips secure AirPods Pro in place and create an acoustic seal that closes in the sound.</p>
      </div>
    </div>
  );
}
