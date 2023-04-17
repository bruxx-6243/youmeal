import ProductCardBasket from "./ProductCardBasket";
import deliverIcon from "../assets/icons/deliver.png";
import cake from "../assets/images/cake.png";
import { allItems } from "../context/shop-context";
import { ShopContext } from "../context/shop-context";
import { useContext, useState } from "react";
import { contextProps } from "../context/shop-context";

export const Basket = () => {
  const { cartItems, getTotalCartAmount, getlen } = useContext(
    ShopContext
  ) as contextProps;
  const [deliveryForm, setDeliveryForm] = useState(false);

  const total = getTotalCartAmount();
  const len = getlen();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeliveryForm((prev) => !prev);
  };

  return (
    <div className="w-[300px] h-full px-[16px] py-[16px] bg-white rounded-[18px] my-[30px] md:mt-[75px]">
      <h2 className="flex justify-between items-center">
        <span className="inline-block text-[24px] font-semibold leading-6">
          Корзина
        </span>
        <span className="inline-block px-[16px] py-[2px] bg-gray_alt rounded-[6px] text-[12px] font-normal leading-[16px]">
          {len}
        </span>
      </h2>

      {len > 0 ? (
        <div className="hidden lg:block">
          <div className="w-full h-[2px] my-[12px] bg-gray_alt" />
          {allItems.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <ProductCardBasket key={item.id} {...item} />;
            }
          })}

          <div>
            <h2 className="flex justify-between items-center text-[24px] font-semibold leading-6">
              Итого
              <span className="inline-block ">{total} ₽</span>
            </h2>
          </div>
          <button
            onClick={() => setDeliveryForm(true)}
            className="w-full h-10 bg-orange text-white text-[16px] font-normal leading-[16px] text-center py-[12px] mt-[24px] rounded-[12px]"
          >
            Оформить заказ
          </button>
          <div className="flex items-center space-x-[8px] mt-[12px]">
            <img src={deliverIcon} alt="Deliver" width={24} height={24} />
            <p className="text-[12px] font-normal leading-[16px]">
              Бесплатная доставка
            </p>
          </div>
        </div>
      ) : (
        <h3 className="hidden lg:block text-xl mt-4 font-normal leading-[21px]">
          Тут пока пусто {":("}
        </h3>
      )}

      <div
        className={`${
          deliveryForm ? "flex" : "hidden"
        } items-center justify-center fixed w-full h-screen top-0 left-0 z-50`}
      >
        <div
          onClick={() => setDeliveryForm((prev) => !prev)}
          className="popup__overflay absolute w-full h-screen bg-black/80"
        ></div>
        <div className="popup__form w-full md:w-[684px]  grid grid-cols-1 md:grid-cols-2 absolute bg-gray_alt rounded-[24px] overflow-hidden">
          <div className="hidden items-center justify-center md:flex bg-yellow w-full h-full">
            <img src={cake} alt="puncake" />
          </div>
          <div className="flex flex-col p-[24px]">
            <h3 className="font-semibold text-[24px] leading-6 mb-4 mt-6">
              Доставка
            </h3>
            <button
              onClick={() => setDeliveryForm((prev) => !prev)}
              className="absolute top-4 right-6 text-[#B1B1B1] text-[24px]"
            >
              X
            </button>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col gap-[8px]">
                <input className="input" type="text" placeholder="Ваше имя" />
                <input
                  className="input"
                  type="numeric"
                  pattern="[0-9]*"
                  placeholder="Телефон"
                />
              </div>

              <div className="flex flex-col gap-[12px] my-[16px]">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    className="input__radio "
                    type="radio"
                    name="deliver"
                    checked
                  />
                  <div className="white__point flex items-center justify-center bg-white w-[12px] h-[12px] rounded-full">
                    <div className="black__point w-[8px] h-[8px] bg-black rounded-full" />
                  </div>
                  <span>Самовывоз</span>
                </label>
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    className="input__radio "
                    type="radio"
                    name="deliver"
                  />
                  <div className="white__point flex items-center justify-center bg-white w-[12px] h-[12px] rounded-full">
                    <div className="black__point w-[8px] h-[8px] bg-black rounded-full" />
                  </div>
                  <span>Доставка</span>
                </label>
              </div>

              <div className="flex flex-col gap-[8px]">
                <input
                  className="input"
                  type="text"
                  placeholder="Улица, дом, квартира"
                />
                <div className="grid grid-cols-2 gap-[8px]">
                  <input className="input" type="number" placeholder="Этаж" />
                  <input
                    className="input"
                    type="number"
                    placeholder="Домофон"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-10 bg-orange text-white text-[16px] font-normal leading-[16px] text-center py-[12px] mt-[24px] rounded-[12px]"
              >
                Оформить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
