const HeaderLogo = () => {
  return (
    <div className="flex gap-4 justify-center item-center">
      <div className="w-[50px] h-[50px] pt-2 pl-2">
        <img
          src="https://www.logoai.com/uploads/icon/2021/09/26/184ba634-a218-4d65-a2b4-f04626d05024.png"
          alt=""
        />
      </div>
      <h3 className="text-4xl self-center font-semibold">
        KING <span className="text-green-400 text-[3rem]">J.</span>
      </h3>
    </div>
  );
};

export default HeaderLogo;
