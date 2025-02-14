const LeftSideBar = () => {
  return (
    <aside className="w-full md:w-[15rem] p-3">
      <div className="flex flex-col p-2  space-y-1">
        <Links />
      </div>
    </aside>
  );
};

type linksProp = {
  name: string;
  link: string;
};

const listOfLinks = (): linksProp[] => {
  return [
    {
      name: "Grid",
      link: "",
    },
    {
      name: "Flex",
      link: "",
    },
  ];
};

const Links = () => {
  const links = listOfLinks();

  return links.map((link) => (
    <a href={link.link} className="border-2 p-2 hover:bg-slate-700">
      {link.name}
    </a>
  ));
};

export default LeftSideBar;
