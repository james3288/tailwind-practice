import { HambumgerMenuIcon } from "../icons/SvgComponents";

const Header = () => {
  return (
    <header
      className="h-[5rem] flex flex-row items-center 
    justify-between p-3"
    >
      {/* logo here */}
      <div>Logo here</div>
      {/* menu here */}
      <div className="hidden md:flex flex-row p-3 space-x-3">
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </div>
      <div className="block md:hidden">
        <HambumgerMenuIcon />
      </div>
    </header>
  );
};

export default Header;
