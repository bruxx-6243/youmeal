import { CustomLink } from "../utils/CustLink";
import { navigation } from "../assets";

export const Navbar = () => {
  return (
    <nav className="px-[10px] sm:px-[64px] md:px-[75px] pt-[40px]">
      <ul className="nav__list flex space-x-[24px] overflow-auto snap-x">
        {navigation.map((item) => (
          <li key={item.title} className="shrink-0 snap-start">
            <CustomLink to={item.to}>
              <img src={item.icon} width={24} height={24} />
              {item.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
