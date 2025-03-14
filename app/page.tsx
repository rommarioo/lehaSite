"use client"
import CarouselLeha from "@/app/carousel-leha";
import {useState} from "react";


export default function Home() {
    const gramots = ["/gramoti/4.jpg", "/gramoti/5.jpg", "/gramoti/6.jpg", "/gramoti/7.jpg", "/gramoti/8.jpg", "/gramoti/9.jpg"];
    const imgs = [ "/1.jpg","/2.jpg","/3.jpg","/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg"];
    const [counter, setCounter] = useState(0);

    return (
    <div className="flex justify-center items-center">
        <main className="p-12">
            <div className={"flex flex-col items-center"}>
                <h1 className={"text-6xl pt-2 flex justify-center items-center max-md:text-3xl text-center"}>Личная
                    страница</h1>
                <h2 className={"text-5xl mt-8 font-bold text-center"} onClick={() => setCounter(counter + 1)}>Алексея Науменко</h2>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center"}>💪Мои достижения💪</p>
            </div>
            <div className={"p-2 mt-8"}>
                <CarouselLeha imgs={gramots}/>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center"}>✨Просто Я✨</p>
            </div>
            <div className={"p-2 mt-8"}>
                <CarouselLeha imgs={imgs}/>
            </div>
            <div>
                <p className={"text-3xl mt-8 text-center"}>✨Мои видео✨</p>
            </div>
            <div className={"p-2 mt-8"}>
                <video autoPlay playsInline muted>
                    <source src={"/video1.mp4"}/>
                </video>
            </div>
            {counter > 10 && (
                <div className={"flex justify-center"}>
                    <video autoPlay playsInline muted>
                        <source src={"/video2.mp4"}/>
                    </video>
                </div>
            )}

        </main>

    </div>
    );
}
