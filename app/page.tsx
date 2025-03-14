import CarouselLeha from "@/app/carousel-leha";


export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <main className="">
          <div className={"flex flex-col items-center"}>
              <h1 className={"text-6xl pt-2 flex justify-center items-center max-md:text-xl text-center"}>Личная
                  страница</h1>
              <h2 className={"text-5xl mt-8 font-bold"}>Алексея Науменко</h2>
          </div>
          <div>
              <p className={"text-3xl mt-8 text-center"}>💪Мои достижения</p>
          </div>
          <div className={"p-2 mt-8"}>
              <CarouselLeha/>
          </div>

      </main>

    </div>
  );
}
