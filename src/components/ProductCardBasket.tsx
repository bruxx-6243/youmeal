import { InterItems } from "../pages/ProductPage";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import { contextProps } from "../context/shop-context";

const ProductCardBasket: React.FC<InterItems> = ({
  id,
  name,
  price,
  weight,
  thumbnail,
}) => {
  const { addToCart, removeFromCart, cartItems } = useContext(
    ShopContext
  ) as contextProps;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-[6px]">
          <img src={thumbnail} alt="burger" width={64} height={52} />
          <div className="flex flex-col">
            <h3 className="font-normal text-[12px] leading-4">
              {name} <br />
              <span className="inline-block text-[#B1B1B1] mb-[6px]">
                {weight}г
              </span>
              <br />
              {price}₽
            </h3>
          </div>
        </div>

        <div className="flex space-x-[18px] px-[12px] py-[9px] bg-gray_alt rounded-[6px] text-[16px] leading-[22px] font-normal">
          <button onClick={() => removeFromCart(id)}>-</button>
          <h3>{cartItems[id]}</h3>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
      <div className="w-full h-[2px] my-[12px] bg-gray_alt" />
    </div>
  );
};

export default ProductCardBasket;
