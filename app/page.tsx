'use client'
import Image from "next/image"
import { useRouter } from "next/navigation";
import { FaArrowRight, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen bg-background flex-row items-center gap-8">
      <div className="p-16">
        <Image src="/images/hadyan-no-bg.png" alt="foto hadyan" width={400} height={400}/>
      </div>
      <div className="w-full font-bold text-5xl">
        <h1 className="text-primary">I&apos;M HADYAN ABDUL AZIZ.</h1>
        <h1 className="text-secondary">FRONTEND DEVELOPER</h1>
        <button className="flex flex-row gap-2 justify-center items-center mt-8 border border-primary hover:border-secondary rounded-full text-primary hover:text-secondary font-medium text-2xl w-72 p-4 transition duration-200"
          onClick={() => router.push('/about')}
        >
          More About Me <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
