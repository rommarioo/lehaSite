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

const CarouselLeha = ({imgs} :{imgs: string[]}) => {

    return (
        <Carousel opts={{loop:true, }}  plugins={[
            Autoplay({
                delay: 2000,
                stopOnInteraction: false,

            }),

        ]} >
            <CarouselContent className={"w-[30vw] max-md:w-[90vw]"}>
                {imgs.map((img, i) => (
                    <CarouselItem key={i}>
                        <Image src={img} width={400} height={400} alt={""} className={"w-full h-[60vh]"} loading={"eager"}/>
                    </CarouselItem>
                ))}

            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

);
};

export default CarouselLeha;