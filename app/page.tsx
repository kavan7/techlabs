"use client";
import Image from "next/image";
import { styles } from "./styles";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselPreviousTwo,
  CarouselPreviousThree,
  CarouselNextTwo, 
  CarouselNextThree
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
  const imageNamestwo = ['carnival.JPG','gradethree.jpg', 'sitting.jpg' ]
  const imageDesctwo = ["Playing live music for our school carnival!", "Grade 3 Terry fox run", "My brother sitting questionably...",  ]
  const imageDatetwo = ["August 19, 2022", "May 13, 2018", "February 4, 2024"]
  const imageNamesthree = ['child.mp4' ,'nuitblanche.mp4', 'uke.mp4' ]
  const imageDescthree = ["Jamming with my bud",  "Playing guitar for a friend at Martingroves' Nuit Blanche Festival  ", 'Ukulele up at Leadership Camp', ]
  const imageDatethree = ["October 22, 2023", "October 27, 2023", "October 5, 2023"]
  return (
    <main className="  justify-center items-center">
      
      <div className="main " >
      </div> <nav className="flex justify-between  w-full mb-10 pt-3  ">
        <button type='button'>
          <a href="https://kavanabeyratne.com" target="_blank">
          <p className="text-white text-[59px]  ml-[280px] block font-bold cursor-pointer animated-nav">
              K |  <span>A</span></p>
              <p className="text-[#7cb00bc9] text-[20px] ml-[280px] sm:block hidden font-bold cursor-pointer animated-nav">
              Kavan <span className="">Abeyratne</span></p>
            

          </a>
         
             </button>

             <button type='button' className="items-center mr-[60px] mt-12">
         
             <h2 className={`font-black text-center text-[#005daa] lg:text-[62px] sm:text-[30px] xs:text-[42px] text-[37.4px] leading-[53px] sm:leading-[50px] sm:mb-18 mb-0  animated justify-normal    `}>
        MEMORIES<br className=""/>
      </h2>
             </button>
        <button type='button' className="mr-[280px]">
          <a href="https://github.com/kavan7/techlabs" target="_blank">
          <Image src= "/logo.svg" height={100} width={100} alt='github' />  
          </a>
             </button>

        </nav>
       
       
     <div className="flex  items-center justify-center">
      
     <Carousel
      plugins={[plugin.current]}
      className="w-[756px]   mt-3"
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
          
                <Image src={`/${imageNames[index]}`} alt={`image-${index}`} height={504} width={378} className=" rounded-2xl" />
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
    <div className="flex flex-col items-center justify-center ">
      <h1 className={`font-black text-center text-[#005daa] lg:text-[62px] sm:text-[30px] xs:text-[42px] text-[37.4px] leading-[53px] sm:leading-[50px] sm:mb-18 mb-0 mt-11 animated justify-normal   `}>
       I LOVE PLAYING 
      </h1>
   
      <Carousel
      plugins={[plugin.current]}
      className="w-[756px]  mb-0 rounded-2xl "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-full">
        {Array.from({ length: 3 }).map((_, index) => (
          
          <CarouselItem key={index}>
            <div className="p-1 rounded-full ">
              <Card>
                <CardContent className="flex aspect-square rounded-full object-contain items-center justify-center ">
                <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          
        <video width="320" height="240" controls >
      <source src={`/${imageNamesthree[index]}`} type="video/mp4" />
    
      Your browser does not support the video tag.
    </video>
                </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-100 rounded-2xl ">
        <div className="flex justify-between space-x-4 rounded-2xl ">
         
          <div className="space-y-1">
            
            <p className="text-sm">
             {imageDescthree[index]}
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
              {imageDatethree[index]}
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
      
      <CarouselPreviousThree />
      <CarouselNextThree />
    </Carousel>

    <h1 className={`${styles.sectionSubText} animated `}>
        A LITTLE SONG I WROTE
      </h1>
     
      <audio
        controls
        src="/RBC.mp3"
        className="mt-3 mb-5">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="bg-[#005daa] mb-4 rounded-full">Lyrics</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-muted-foreground">RBC - Kavan Abeyratne | Let it be - The Beatles remix</h4>
            <p className="text-sm leading-none">
              When I find myself in times of trouble <br className="mb-3"/>
              RBC comes to me<br className="mb-3"/> Helping with my banking,  RBC<br className="mb-3"/>
              A prepaid card when I online shop<br className="mb-3"/> RBC gives to me <br className="mb-3"/>Making sure I'm safe, RBC <br className="mb-3"/>RBC, RBC, RBC, RBC, <br className="mb-2"/>it's more than just bank, RBC
              <br className="mb-3"/>
              *GUITAR SOLO BY ME*
            </p>
         
          </div>
        </div>
      </PopoverContent>
    </Popover>
    </div>
    <div className="flex flex-col items-center justify-center ">
      <h1 className={`${styles.sectionSubText} z-999 animated-nav mb-0 `}>
       And I dont take myself too seriously... seriously.
      </h1>
      <Carousel
      plugins={[plugin.current]}
      className="w-[756px]  rounded-2xl "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-full">
        {Array.from({ length: 3 }).map((_, index) => (
          
          <CarouselItem key={index}>
            <div className="p-1 rounded-full ">
              <Card>
                <CardContent className="flex aspect-square rounded-full object-contain items-center justify-center p-6">
                <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          
                <Image src={`/${imageNamestwo[index]}`} alt={`image-${index}`} height={1008} width={756} className=" rounded-2xl" />
                </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-100 rounded-2xl ">
        <div className="flex justify-between space-x-4 rounded-2xl ">
         
          <div className="space-y-1">
            
            <p className="text-sm">
             {imageDesctwo[index]}
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
              {imageDatetwo[index]}
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
      
      <CarouselPreviousTwo />
      <CarouselNextTwo />
    </Carousel>

  
    </div>

    
    </main>
  );
}
