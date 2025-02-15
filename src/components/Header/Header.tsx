import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  return (
    <section
      className="flex w-full justify-between h-[5rem] 
  border-b-2 border-slate-800 relative"
    >
      {/* logo */}
      <HeaderLogo />
      {/* end logo */}

      {/* navigation */}
    </section>
  );
};

export default Header;
