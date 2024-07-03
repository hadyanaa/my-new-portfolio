'use client'
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  stack: [];
  url_image: string;
  url_project: string;
}

export default function Portfolio() {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState<PortfolioItem[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/portfolio.json');
        const data = await response.json();
        setPortfolio(data);
        setFilteredPortfolio(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (category: any) => {
    setFilterCategory(category);
    if (!category) {
      setFilteredPortfolio(portfolio); 
    } else {
      const filtered = portfolio.filter(cat => cat?.category.toLowerCase() === category.toLowerCase());
      setFilteredPortfolio(filtered);
    }
  };

  return (
    <div className="flex min-h-screen justify-start flex-col gap-16">
      {/* header */}
      <div className="flex flex-col mt-36 pt-0 w-full items-center font-bold text-5xl">
        <div className="flex flex-row gap-2">
          <h1 className="text-primary">MY</h1>
          <h1 className="text-secondary">PORTFOLIO</h1>
        </div>
      </div>

      {/* filter */}
      <div className="flex flex-row justify-center gap-4">
        <Button
          className={`${filterCategory === '' ? 'border-secondary text-secondary' : ''}`}
          onClick={() => handleFilter('')}>All</Button>
        <Button
          className={`${filterCategory === 'Frontend' ? 'border-secondary text-secondary' : ''}`}
          onClick={() => handleFilter('Frontend')}>Frontend</Button>
        <Button
          className={`${filterCategory === 'Fullstack' ? 'border-secondary text-secondary' : ''}`}
          onClick={() => handleFilter('Fullstack')}>Fullstack</Button>
        <Button
          className={`${filterCategory === 'Freelance' ? 'border-secondary text-secondary' : ''}`}
          onClick={() => handleFilter('Freelance')}>Freelance</Button>
        <Button
          className={`${filterCategory === 'College' ? 'border-secondary text-secondary' : ''}`}
          onClick={() => handleFilter('College')}>College</Button>
      </div>


      {/* list portfolio */}
      <div className="grid grid-cols-3 gap-4 mb-32">
        {filteredPortfolio.map((item, index) => (
          <a key={`link-${index}`} href={item.url_project} target="_blank">
            <div 
              // onClick={() => {router.push(item.url_project)}}
              className="relative w-full h-52 border border-primary text-primary text-sm rounded-xl cursor-pointer"
              key={index}
            >
              <Image
                className="rounded-xl hover:opacity-10 hover:z-10"
                src={item.url_image}
                alt={`${item.title} Image`}
                layout="fill"
                objectFit="cover"
              />
              <div className="flex flex-col items-center mt-8 px-4">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <h4>{item.description}</h4>
              </div>
              {/* <Button
                onClick={() => {router.push(item.url_project)}}
                className="flex mx-auto mt-4 hover:border-secondary z-0"
              >See Project</Button> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}