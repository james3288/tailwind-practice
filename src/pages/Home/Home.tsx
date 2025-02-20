import HeaderLogo from "../../components/Header/HeaderLogo/HeaderLogo";
import Navigation from "../../components/Header/Navigation/Navigation";
import HeroPage from "../Hero/HeroPage";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <section
        className="flex w-full justify-between h-[5rem] 
      border-b-2 border-slate-800 relative "
      >
        {/* logo */}
        <HeaderLogo />
        {/* end logo */}

        {/* menu */}
        <Navigation />
      </section>

      {/* HERO */}
      <HeroPage />

      {/* Portfolio */}
      <Portfolio />
    </div>
  );
};

export default Home;
