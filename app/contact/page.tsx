'use client'
import Form from "@/components/form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen justify-start flex-col gap-16">
      {/* header */}
      <div className="flex flex-col mt-36 pt-0 w-full items-center font-bold text-5xl">
        <div className="flex flex-row gap-3">
          <h1 className="text-primary">GET IN</h1>
          <h1 className="text-secondary">TOUCH</h1>
        </div>
      </div>

      {/* contact */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-primary font-medium text-3xl">LET'S MAKE A CONNECTION</h3>
          <p className="text-primary font-normal text-base">I am always looking for new ways to connect with partners. Whether you have a question, a suggestion, or just want to chat, I'm here to hear from you.</p>
          <div className="flex flex-row gap-2 border border-primary py-2 px-4 justify-center items-center rounded-full w-fit">
            <Image
              src="/icons/email.png"
              alt="icon email"
              width={20}
              height={20}
            />
            <p className="text-primary">hadyanabdulaziz@gmail.com</p>
          </div>
          <div className="flex flex-row gap-2 border border-primary py-2 px-4 justify-center items-center rounded-full w-fit">
            <Image
              src="/icons/location.png"
              alt="icon location"
              width={20}
              height={20}
            />
            <p className="text-primary">Sukatani, Tapos, Kota Depok</p>
          </div>
          <div className="flex flex-row gap-2 border border-primary py-2 px-4 justify-center items-center rounded-full w-fit">
            <Image
              src="/icons/phone.png"
              alt="icon phone"
              width={20}
              height={20}
            />
            <p className="text-primary">+6285156305278</p>
          </div>
          <p className="text-primary font-normal text-base">Or connect with me on social media</p>
          <div className="flex flex-row gap-2">
            <button onClick={() => router.push('https://www.instagram.com/hady.an/')} className="flex justify-center items-center border border-primary hover:border-secondary text-primary hover:text-secondary p-2 rounded-full w-10 h-10">
              <FaInstagram />
            </button>
            <button onClick={() => router.push('https://www.linkedin.com/in/hadyanaa/')} className="flex justify-center items-center border border-primary hover:border-secondary text-primary hover:text-secondary p-2 rounded-full w-10 h-10">
              <FaLinkedin />
            </button>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}