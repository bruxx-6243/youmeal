import { Dispatch, SetStateAction } from "react";
import { ProductCard } from "../components/ProductCard";

export interface InterItems {
  id: number;
  name: string;
  price: number;
  weight: number;
  thumbnail: string;
}

interface ProductProps {
  id: number;
  title: string;
  items: InterItems[];
}

export const ProductPage: React.FC<ProductProps> = ({
  id,
  title,
  items,
  ...props
}) => {
  return (
    <div {...props}>
      <h2 className="font-normal text-[28px] sm:text-[40px] leading-[48px] mb-[24px]">
        {title}
      </h2>
      {items.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-[10px] sm:gap-[20px] md:gap-[30px]">
          {items.map((item) => (
            <ProductCard key={item.id} {...item} productId={id} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl">Тут пока пусто :{"("}</h1>
      )}
    </div>
  );
};
