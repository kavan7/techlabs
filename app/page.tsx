"use client";
import Image from "next/image";
import { styles } from "./styles";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CalendarIcon } from "@radix-ui/react-icons"
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 
 
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const imageNames = ["one.png", "three.png", "four.png", "two.png", "five.png", ];
  const imageDesc = ["My photo taking started two years ago. This was taken after I watched 'Nope'", "Getting pizza after my first 25 point basketball game.", "Watched The Beatles cover band play at Roy Thomson hall", "Visited my brother in Waterloo", "Had Korean BBQ for the first time.", ]
  const imageDate = ["August 19, 2022", "February 16, 2023", "July 6, 2023", "July 18, 2023", "August 19, 2022"]
 
  return (
    <main className="  justify-center items-center">
      
      <div className="main"> <h2 className={`font-black text-center text-[#005daa] lg:text-[62px] sm:text-[30px] xs:text-[42px] text-[37.4px] leading-[53px] sm:leading-[50px] sm:mb-18 mb-0  animated justify-normal mb-[600px]   `}>
        MEMORIES<br className=""/>
      </h2>
      </div> <nav className="flex justify-between  w-full mb-10 pt-3  ">
        <button type='button'>
          <a href="https://kavanabeyratne.com" target="_blank">
          <p className="text-white text-[59px]  ml-[280px] block font-bold cursor-pointer animated-nav">
              K |  <span>A</span></p>
              <p className="text-[#7cb00bc9] text-[20px] ml-[280px] sm:block hidden font-bold cursor-pointer animated-nav">
              Kavan <span className="">Abeyratne</span></p>
            

          </a>
         
             </button>
        <button type='button' className="mr-[280px]">
          <a href="https://github.com/kavan7/techlabs" target="_blank">
          <Image src= "/logo.svg" height={100} width={100} alt='github' />  
          </a>
             </button>

        </nav>
       
       
     <div className="flex rounded-2xl items-center justify-center">
      
     <Carousel
      plugins={[plugin.current]}
      className="w-[756px]  rounded-2xl mt-3"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-full">
        {Array.from({ length: 5 }).map((_, index) => (
          
          <CarouselItem key={index}>
            <div className="p-1 rounded-full ">
              <Card>
                <CardContent className="flex aspect-square rounded-full object-contain items-center justify-center p-6">
                <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          
                <Image src={`/${imageNames[index]}`} alt={`image-${index}`} height={1008} width={756} className=" rounded-2xl" />
                </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-100 rounded-2xl ">
        <div className="flex justify-between space-x-4 rounded-2xl ">
         
          <div className="space-y-1">
            
            <p className="text-sm">
             {imageDesc[index]}
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
              {imageDate[index]}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
                </CardContent>
              </Card>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </main>
  );
}
