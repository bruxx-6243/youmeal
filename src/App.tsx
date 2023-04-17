import RootLayout from "./layout/RootLayout";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <ShopContextProvider>
      <RootLayout />
    </ShopContextProvider>
  );
}

export default App;
