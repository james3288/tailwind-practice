import { CardProps } from "../../../Types";

const CardGrid = ({ classParam = "col-span-1", ...props }: CardProps) => {
  return (
    <div
      className={`$flex flex-col p-5
       bg-slate-700 rounded-md drop-shadow-lg ${classParam}`}
    >
      {/* card header */}
      <div>
        {/* card title */}
        <div>{props.title}</div>
      </div>

      {/* card body */}
      <div>
        <p className="text-3xl">{props.details}</p>
      </div>

      {/* card footer */}
      <div>footer</div>
    </div>
  );
};

export default CardGrid;
