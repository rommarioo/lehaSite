"use client"
import CarouselLeha from "@/app/carousel-leha";
import Image from "next/image";
import {useEffect, useRef} from "react";



export default function Home() {
    const gramots = [ "/gramoti/6.jpg", "/gramoti/7.jpg", "/gramoti/8.jpg", "/gramoti/9.jpg"];
    const imgs = [ "/1.jpg","/2.jpg","/3.jpg","/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg"];
    const books = ["/books/1.jpg", "/books/2.jpg", "/books/3.jpg", "/books/4.jpg",]
    const ref = useRef<HTMLAudioElement>(null);
    useEffect(() => {


        document.addEventListener('click', () => {
            //eslint-disable-next-line
            //@ts-ignore
            ref.current.play()
            })
        },[])
    return (
    <div className="flex justify-center items-center">
        <main className="p-12 max-md:p-2 relative flex flex-col items-center">
            <audio ref={ref} src="/lehaMusic.mp3"  loop></audio>
            <div className={"flex flex-col items-center"}>
                <h1 className={"text-6xl pt-2 flex justify-center items-center font-bold text-center"}>Личная
                    страница</h1>
                <h2 className={"text-5xl mt-14 font-bold text-center animate-bounce"}>Алексея Науменко <span
                    className={"animate-pulse"}>(Лучшего программиста СПСа и трижды героя 1с)</span></h2>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center font-bold"}>💪Мои достижения💪</p>
            </div>
            <div className={"p-2 mt-8 w-fit flex justify-center"}>
                <CarouselLeha imgs={gramots}/>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center font-bold"}>✨Просто Я✨</p>
            </div>
            <div className={"p-2 mt-8"}>
                <CarouselLeha imgs={imgs}/>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center font-bold"}>✨Мои видео✨</p>
            </div>
            <div className={"p-2 mt-8"}>
                <video autoPlay playsInline muted loop>
                    <source src={"/video1.mp4"}/>
                </video>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center font-bold"}>✨Я с лучшим другом✨</p>
            </div>
            <div className={"p-2 mt-8"}>
                <Image src={"/friends.jpg"} width={400} height={400} alt={""} className={"w-full"}/>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center font-bold"}>✨Мои любимые книги✨</p>
            </div>
            <div className={"p-2 mt-8"}>
                <CarouselLeha imgs={books}/>
            </div>
            <Image src={"/1s.png"} width={100} height={100} alt={""} className={"animate-spin fixed left-0 bottom-0"}/>
            <Image src={"/reklama/uppers.png"} alt={""} className={" fixed right-1 bottom-0 max-md:w-[60%]"} width={450} height={80} />

        </main>

    </div>
    );
}
