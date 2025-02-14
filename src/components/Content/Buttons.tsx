const Buttons = () => {
  return (
    <>
      <button
        className="bg-sky-500 hover:bg-sky-700 p-3 rounded-xl
    focus:outline-2 focus:outline-offset-2 focus:outline-violet-500
    active:bg-violet-700"
      >
        Save Changes
      </button>

      <label className="has-[:checked]:bg-red-500 p-4 rounded-xl">
        <input type="checkbox" className="mr-2" />
        Click me
      </label>
    </>
  );
};

export default Buttons;
