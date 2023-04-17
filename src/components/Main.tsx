import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../pages/ProductPage";
import { Basket } from "./Basket";
import { products } from "../assets/data";

export const Main = () => {
  return (
    <main className="flex flex-col lg:flex-row sm:gap-x-[30px] mt-8 px-[10px] sm:px-[64px] md:px-[75px] ">
      <Basket />
      <Routes>
        {products.map((product) => (
          <Route
            key={product.id}
            path={`/${product.path}`}
            element={
              <ProductPage
                title={product.title}
                id={product.id}
                items={product.items}
              />
            }
          />
        ))}
      </Routes>
    </main>
  );
};
