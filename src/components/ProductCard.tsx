import { Button } from "../components/Button";
import { InterItems } from "../pages/ProductPage";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import { contextProps } from "../context/shop-context";

interface cardProps extends InterItems {
  productId: number;
}

export const ProductCard: React.FC<cardProps> = ({
  productId,
  id,
  name,
  price,
  weight,
  thumbnail,
  ...props
}) => {
  const { addToCart, cartItems } = useContext(ShopContext) as contextProps;

  const cardItemAmout = cartItems[id];

  return (
    <div
      {...props}
      className="p-[12px] bg-white w-full md:max-w-[276px] lg:w-[300px] rounded-[18px] "
    >
      <img src={thumbnail} alt="burger" className="w-full mb-[16px]" />
      <h3 className="text-[16pxpx] leading-[21px]">
        <span className="inline-blobk font-semibold text-[24px]">
          {price}
          <span>₽</span>
        </span>
        <br />
        {name} <br />
        <span className="inline-block text-[#B1B1B1] mt-[16px] md:mt-[26px]">
          {weight} <span>г</span>
        </span>
      </h3>
      <Button onClick={() => addToCart(id)} color="black" bgColor="gray_alt">
        <>Добавить</> {cardItemAmout > 0 && <>({cardItemAmout})</>}
      </Button>
    </div>
  );
};
