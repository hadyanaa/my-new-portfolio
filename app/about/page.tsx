import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen justify-start flex-col gap-28">
      {/* header */}
      <div className="flex flex-col mt-36 pt-0 w-full items-center font-bold text-5xl">
        <div className="flex flex-row gap-2">
          <h1 className="text-primary">ABOUT</h1>
          <h1 className="text-secondary">ME</h1>
        </div>
      </div>

      {/* personal info */}
      <div className="flex flex-col gap-16">
        <h3 className="text-primary font-medium text-3xl">PERSONAL INFO</h3>
        <div className="grid grid-cols-3 font-normal text-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
              <p className="text-secondary">First Name:</p>
              <p className="text-primary">Hadyan</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Age:</p>
              <p className="text-primary">24 Years</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Freelance:</p>
              <p className="text-primary">Available</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Phone:</p>
              <p className="text-primary">+6285156305278</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Last Name:</p>
              <p className="text-primary">Abdul Aziz</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Nationality:</p>
              <p className="text-primary">Indonesia</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Address:</p>
              <p className="text-primary">Depok</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-secondary">Email:</p>
              <p className="text-primary">hadyanabdulaziz@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-primary font-bold text-5xl">2+</h2>
            <p className="text-secondary font-normal text-2xl">Years Of Experience</p>
          </div>
        </div>
        <button className="border border-primary rounded-full text-primary font-medium text-2xl w-72 p-4">
          Download CV -&gt;
        </button>
      </div>

      {/* tech stack */}
      <div className="flex flex-col gap-16">
        <h3 className="text-primary text-center font-medium text-3xl">MY TECH STACK</h3>
        <div className="grid grid-cols-2 font-normal text-2xl">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-primary">Frontend Development</p>
              <div className="flex flex-row gap-4">
                <Image
                  src="/icons/fe-js.png"
                  alt="icon javascript"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/fe-ts.png"
                  alt="icon javascript"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/fe-react.png"
                  alt="icon javascript"
                  width={40}
                  height={34}
                />
                <Image
                  src="/icons/fe-next.png"
                  alt="icon javascript"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-primary">Database Technologies</p>
              <div className="flex flex-row gap-4">
                <Image
                  src="/icons/db-mysql.png"
                  alt="icon mysql"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/db-postgresql.png"
                  alt="icon postgresql"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-primary">Backend Development</p>
              <div className="flex flex-row gap-4">
                <Image
                  src="/icons/be-laravel.png"
                  alt="icon javascript"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/be-php.png"
                  alt="icon javascript"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/be-python.png"
                  alt="icon javascript"
                  width={40}
                  height={34}
                />
                <Image
                  src="/icons/be-go.png"
                  alt="icon javascript"
                  width={50}
                  height={16}
                />
                <Image
                  src="/icons/be-nodejs.png"
                  alt="icon javascript"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-primary">Version Control Systems</p>
              <div className="flex flex-row gap-4">
                <Image
                  src="/icons/vs-github.png"
                  alt="icon mysql"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/vs-gitlab.png"
                  alt="icon postgresql"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* experience */}
      <div className="flex flex-col gap-16 mb-32">
        <h3 className="text-primary text-center font-medium text-3xl">EXPERIENCE & EDUCATION</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col min-w-fit">
                <Image
                  src="/icons/exp.png"
                  alt="experience icon"
                  width={100}
                  height={100}
                />
                <div className="h-32 w-[1px] bg-secondary mx-auto"></div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-secondary max-w-fit mt-8 px-4 py-2 rounded-lg">
                  <p className="text-background font-normal text-base">Feb 2024 - Present</p>
                </div>
                <div className="flex flex-row gap-4">
                  <h4 className="text-primary font-semibold text-2xl">Junior Developer -</h4>
                  <h5 className="text-primary font-normal text-xl">PT Indosat Tbk</h5>
                </div>
                <div className="-mt-4">
                  <p className="text-primary">Manage API Operations.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col min-w-fit">
                <Image
                  src="/icons/exp.png"
                  alt="experience icon"
                  width={100}
                  height={100}
                />
                <div className="h-48 w-[1px] bg-secondary mx-auto"></div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-secondary max-w-fit mt-8 px-4 py-2 rounded-lg">
                  <p className="text-background font-normal text-base">Nov 2023 - Feb 2024</p>
                </div>
                <div className="flex flex-row gap-4">
                  <h4 className="text-primary font-semibold text-2xl">Frontend Developer -</h4>
                  <h5 className="text-primary font-normal text-xl">PT Indosat Tbk</h5>
                </div>
                <div className="-mt-4">
                  <p className="text-primary text-justify max-w-prose">- Implemented responsive and accessible user interfaces to ensure seamless customer interactions, aligning with web accessibility standards.<br />
                  - Developed and built a comprehensive Digital Partnerships Portal for API Services, utilizing the Next.js framework and TypeScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col min-w-fit">
                <Image
                  src="/icons/exp.png"
                  alt="experience icon"
                  width={100}
                  height={100}
                />
                <div className="h-56 w-[1px] bg-secondary mx-auto"></div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-secondary max-w-fit mt-8 px-4 py-2 rounded-lg">
                  <p className="text-background font-normal text-base">Mar 2023 - Nov 2023</p>
                </div>
                <div className="flex flex-row gap-4">
                  <h4 className="text-primary font-semibold text-2xl">React Developer -</h4>
                  <h5 className="text-primary font-normal text-xl">PT Ihsan Solusi Informatika</h5>
                </div>
                <div className="-mt-4">
                  <p className="text-primary text-justify max-w-prose">- Implemented responsive and accessible user interfaces to ensure seamless customer interactions, aligning with web accessibility standards.<br />
                  - Developed and built a comprehensive Bank Operating System for Sharia Banking institutions, utilizing the Next.js framework and TypeScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col min-w-fit">
                <Image
                  src="/icons/edu.png"
                  alt="experience icon"
                  width={100}
                  height={100}
                />
                <div className="h-44 w-[1px] bg-secondary mx-auto"></div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="bg-secondary max-w-fit mt-8 px-4 py-2 rounded-lg">
                  <p className="text-background font-normal text-base">Mar 2023</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-primary font-semibold text-2xl">Information System -</h4>
                  <h5 className="text-primary font-normal text-xl">Sekolah Tinggi Teknologi Terpadu Nurul Fikri</h5>
                </div>
                <div className="-mt-4">
                  <p className="text-primary text-justify max-w-prose">Grade: 3.79/4.00<br />
                  Thesis: Designing a Presence Information System for Student Mentoring Activities Using the Laravel Framework at STT NF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}