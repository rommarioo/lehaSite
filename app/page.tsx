import CarouselLeha from "@/app/carousel-leha";


export default function Home() {
    const gramots = ["/gramoti/1.jpg", "/gramoti/2.jpg", "/gramoti/3.jpg", "/gramoti/4.jpg", "/gramoti/5.jpg", "/gramoti/6.jpg", "/gramoti/7.jpg", "/gramoti/8.jpg"];
    const imgs = [ "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"];
    return (
    <div className="flex justify-center items-center">
        <main className="p-12">
            <div className={"flex flex-col items-center"}>
                <h1 className={"text-6xl pt-2 flex justify-center items-center max-md:text-3xl text-center"}>Личная
                    страница</h1>
                <h2 className={"text-5xl mt-8 font-bold text-center"}>Алексея Науменко</h2>
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

        </main>

    </div>
    );
}
