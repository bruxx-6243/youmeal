import burgerImg from "../assets/images/burger-hero.png";

export const Hero = () => {
  return (
    <section className="hero__section w-full h-screen sm:h-[calc(100vh-110px)] grid items-center  bg-no-repeat bg-center bg-cover pt-[30px] sm:pt-0">
      <div className="w-full h-full flex flex-col-reverse sm:flex-row  items-center justify-center gap-5">
        <img
          className="hero-burg w-3/4 sm:w-1/4"
          src={burgerImg}
          alt="big burger"
        />
        <div className="text-center sm:text-start">
          <h1 className="text-normal font-extrabold text-[30px] sm:text-[36px] md:text-[50px] leading-[60px] text-white ">
            Только самые <br />
            <span className="text-orange">сочные бургеры!</span>
          </h1>
          <p className="text-white text-[16px] font-normal leading-[22px] mt-[16px] sm:mt-[26px] md:mt-[52px]">
            Бесплатная доставка от 599₽
          </p>
        </div>
      </div>
    </section>
  );
};
