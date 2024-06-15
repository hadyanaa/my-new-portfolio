'use client'
import Button from "@/components/button";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  stack: [];
  url_image: string;
}

export default function Portfolio() {
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
        <Button onClick={() => handleFilter('')}>All</Button>
        <Button onClick={() => handleFilter('Frontend')}>Frontend</Button>
        <Button onClick={() => handleFilter('Fullstack')}>Fullstack</Button>
        <Button onClick={() => handleFilter('Freelance')}>Freelance</Button>
        <Button onClick={() => handleFilter('College')}>College</Button>
      </div>

      {/* list portfolio */}
      <div className="grid grid-cols-3 gap-4 mb-32">
        {filteredPortfolio.map((item, index) => (
          <div className="relative w-full h-52 border border-primary text-primary text-sm rounded-xl" key={index}>
            <Image
              className="rounded-xl hover:opacity-10"
              src={item.url_image}
              alt={`${item.title} Image`}
              layout="fill"
              objectFit="cover"
            />
            <div className="flex flex-col items-center mt-8">
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <h4>{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}