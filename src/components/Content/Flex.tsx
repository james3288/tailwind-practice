import CardFlex from "../../pages/DashboardPage/Cards/CardFlex";

const Flex = () => {
  return (
    <>
      {/* flex initial and flex-auto */}
      <h3>FLEX INITIAL AND FLEX-AUTO</h3>
      <div className="flex flex-row gap-2 mb-3 justify-between">
        <CardFlex
          classParam="w-32"
          title="Hello"
          details="1"
          bg_color="bg-slate-600"
        />
        <CardFlex
          classParam="w-32"
          title="Hello"
          details="2"
          bg_color="bg-slate-600"
        />
        <CardFlex
          classParam="w-60 flex-initial"
          title="Hello"
          details="3"
          bg_color="bg-slate-600"
        />
        <CardFlex
          classParam="w-64 flex-auto"
          title="lorem ipsum"
          details="4"
          bg_color="bg-slate-600"
        />
      </div>

      {/* width and grow */}
      <h3>WIDTH AND GROW</h3>
      <div className="flex gap-2 mb-3">
        <CardFlex
          classParam="w-60 grow-0"
          title="Hello"
          details="1"
          bg_color="bg-blue-500"
        />
        <CardFlex
          classParam="w-60"
          title="Hello"
          details="1"
          bg_color="bg-blue-500"
        />
        <CardFlex
          classParam="w-60"
          title="Hello"
          details="1"
          bg_color="bg-blue-500"
        />
        <CardFlex
          classParam="grow"
          title="Hello"
          details="1"
          bg_color="bg-blue-500"
        />
      </div>

      {/* GROW */}
      <h1>GROW</h1>
      <div className="flex gap-2 mb-3">
        <CardFlex
          classParam=""
          title="Hello"
          details="2"
          bg_color="bg-violet-400"
        />
        <CardFlex
          classParam="grow"
          title="Hello"
          details="2"
          bg_color="bg-violet-400"
        />
      </div>

      {/* SHRINK */}
      <h3>SHRINK</h3>
      <div className="flex gap-2 mb-3">
        <CardFlex
          classParam="w-[200px] flex-none"
          title="Hello"
          details="1"
          bg_color="bg-red-400"
        />
        <CardFlex
          classParam="w-[200px] shrink"
          title="Hello"
          details="2"
          bg_color="bg-red-400"
        />
        <CardFlex
          classParam="w-[200px] grow"
          title="Hello"
          details="3"
          bg_color="bg-red-400"
        />
      </div>

      {/* FLEX ORDERS */}
      {/* order-last, order-first or order-1, order-2, order-3 ... */}
      {/* using custom value: order-[min(var(--total-items),10)] */}
      <h1>FLEX ORDERS</h1>
      <div className="flex gap-2 mb-3">
        <CardFlex
          classParam="w-[200px] flex-none"
          title="Hello"
          details="1"
          bg_color="bg-blue-400 order-last"
        />
        <CardFlex
          classParam="w-[200px] shrink"
          title="Hello"
          details="2"
          bg_color="bg-blue-400"
        />
        <CardFlex
          classParam="w-[200px] grow order-first"
          title="Hello"
          details="3"
          bg_color="bg-blue-400"
        />
      </div>

      <h1>JUSTIFY and ITEMS</h1>
      {/* justify-start, justify-end, justify-center, justify-between, justify-around, justify-evenly */}
      {/* items-center, items-start, items-end, items-baseline, items-stretch */}
      <div className="flex gap-2 mb-3 items-center">
        <CardFlex
          classParam="py-4"
          title="Hello"
          details="1"
          bg_color="bg-blue-500"
        />
        <CardFlex
          classParam="py-12"
          title="Hello"
          details="2"
          bg_color="bg-blue-500"
        />
        <CardFlex
          classParam="py-8"
          title="Hello"
          details="3"
          bg_color="bg-blue-500"
        />
      </div>
    </>
  );
};

export default Flex;
