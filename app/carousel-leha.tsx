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

const CarouselLeha = () => {
    return (
        <Carousel opts={{loop:true}}  plugins={[
            Autoplay({
                delay: 2000,

            }),
        ]}>
            <CarouselContent className={"w-[50vw]"}>
                <CarouselItem >1</CarouselItem>
                <CarouselItem>2</CarouselItem>
                <CarouselItem>3</CarouselItem>
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

);
};

export default CarouselLeha;