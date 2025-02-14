import { CardProps } from "../../../Types";

const CardFlex = ({ classParam = "col-span-1", ...props }: CardProps) => {
  return (
    <div
      className={`$flex flex-col p-5
       ${props.bg_color} rounded-md drop-shadow-lg ${classParam}`}
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

export default CardFlex;
