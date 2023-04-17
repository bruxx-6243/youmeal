import { useEffect, useState } from "react";
import logoWhite from "../assets/logos/youmeal-logo-white.png";
import logoColor from "../assets/logos/youmeal-logo-orange.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [inView, setInView] = useState(false);

  const handleInView = () => {
    window.addEventListener("scroll", function () {
      if (this.scrollY > 130) {
        setInView(true);
      } else {
        setInView(false);
      }
    });
  };

  useEffect(() => {
    handleInView();
  }, []);

  return (
    <header
      className={`${
        inView && "bg-white/90"
      } w-full fixed -top-1 left-0 px-7 py-4 mx-auto z-50 transition duration-300`}
    >
      <Link to="/">
        <img
          className="block mx-auto"
          src={`${inView ? logoColor : logoWhite}`}
          alt="Youmeal logo"
          width={150}
          height={29}
        />
      </Link>
    </header>
  );
};
