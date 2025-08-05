import NoiseGif from "@/assets/noise.gif";
import Image from "next/image";

export default function NoiseOverlay() {
  return (
    <Image
      src={NoiseGif}
      alt='Noise'
      className='select-none absolute inset-0 object-cover w-screen h-screen opacity-5 pointer-events-none z-[2000]'
    />
  );
}
