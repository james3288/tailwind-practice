type CardProps = {
  title: string;
  classParam?: string;
  details?: string;
};

const Card = ({ classParam, ...props }: CardProps) => {
  return (
    <div
      className={`${classParam} flex flex-col p-5
       bg-slate-700 rounded-md drop-shadow-lg`}
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

export default Card;
