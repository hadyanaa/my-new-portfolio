'use client'
import Form from "@/components/form";

export default function Contact() {
  return (
    <div className="flex min-h-screen justify-start flex-col gap-16">
      {/* header */}
      <div className="flex flex-col mt-36 pt-0 w-full items-center font-bold text-5xl">
        <div className="flex flex-row gap-3">
          <h1 className="text-primary">GET IN</h1>
          <h1 className="text-secondary">TOUCH</h1>
        </div>
      </div>
      <Form />
    </div>
  )
}