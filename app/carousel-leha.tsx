"use client"
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CarouselLeha = () => {
   const imgs = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"];
    return (
        <Carousel opts={{loop:true}}  plugins={[
            Autoplay({
                delay: 2000,

            }),
        ]}>
            <CarouselContent className={"w-[30vw]"}>
                {imgs.map((img, i) => (
                    <CarouselItem key={i}>
                        <Image src={img} width={400} height={400} alt={""} className={"w-full h-[60vh]"}/>
                    </CarouselItem>
                ))}

            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

);
};

export default CarouselLeha;