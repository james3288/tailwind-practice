type peopleProps = {
  name: string;
  img: string;
  title: string;
};

const peoples = (): peopleProps[] => {
  return [
    {
      name: "Lea De",
      img: "data:image/jpeg;base64,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",
      title: "Co Founder/ CEO",
    },
    {
      name: "Donald Trump",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "IT operator",
    },
    {
      name: "Ronald White",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Web Developer",
    },
  ];
};
const NestedGroups = () => {
  return (
    <ul className="flex flex-col w-full bg-slate-950 rounded-xl">
      {peoples().map((people) => (
        <li className="group/item">
          <a
            href=""
            className="group/edit flex flex-row items-center gap-3 relative 
            group-hover/item:bg-slate-800 p-4
             group-hover/item:rounded-xl
             group-hover/item:transition-colors ease-in-out"
          >
            <img
              src={people.img}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            {people.name}
            <span
              className="absolute right-5 px-3 py-1 rounded-lg
             bg-slate-900 hidden group-hover/edit:block text-white
             hover:text-orange-400 hover:bg-slate-950"
            >
              Call
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NestedGroups;
