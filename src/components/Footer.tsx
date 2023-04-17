import logoColor from "../assets/logos/youmeal-logo-orange.png";
import call from "../assets/icons/call.png";
import vk from "../assets/icons/vk-default.png";
import telegram from "../assets/icons/telegram.png";

export const Footer = (props: any) => {
  return (
    <footer
      ref={props.ref}
      className="bg-white w-full px-[10px] sm:px-[64px] md:px-[75px] py-[51px] mt-[100px]"
    >
      <div className="flex justify-between items-center gap-6 flex-wrap whitespace-nowrap">
        <img
          src={logoColor}
          alt="logo youmeal"
          className="w-[196px] md:w-[300px]"
        />
        <div className="flex items-center flex-wrap gap-6 md:gap-x-16">
          <div>
            <p className="text-[24px] font-normal leading-[24px] mb-[24px]">
              Номер для заказа
            </p>
            <a className="inline-flex" href="tel:+7(930)833-38-11">
              <img
                src={call}
                width={24}
                height={24}
                alt="call"
                className="mr-[4px]"
              />
              +7(930)833-38-11
            </a>
          </div>
          <div>
            <p className="text-[24px] font-normal leading-[24px] mb-[24px]">
              Мы в соцсетях
            </p>
            <div className="flex item-center space-x-[16px]">
              <a href="https://vk.com/console_log_hello_world">
                <img src={vk} alt="vk icon" />
              </a>
              <a href="">
                <img src={telegram} alt="telegram icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] font-normal text-[12px] leading-[16px]">
        <p>© YouMeal, {new Date().getFullYear()}</p>
        <p className="my-2">
          Designed: <a href="/">Anastasia Ilina</a>
        </p>
        <p className="text-orange">
          Developed: <a href="https://github.com/bruxx-6243">BRUXX DEV</a>
        </p>
      </div>
    </footer>
  );
};
