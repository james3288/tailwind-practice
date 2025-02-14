import CardGrid from "../../pages/DashboardPage/Cards/CardGrid";

const Grid = () => {
  return (
    <>
      <h1>Grid</h1>
      {/* grid-cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row-dense">
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1 row-span-2"
          details="1"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="2"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="3"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1 row-span-2"
          details="4"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="5"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="6"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="7"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="8"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="9"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 md:col-span-1 col-span-2"
          details="10"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 col-span-1"
          details="11"
        />
        <CardGrid
          title="Hello World"
          classParam="sm:col-span-1 lg:col-span-3 col-span-3"
          details="12"
        />
      </div>
      <h1>Sub Grid</h1>
      {/* Custom Value: */}
      {/* grid-cols-[200px_minmax(900px,_1fr)_100px] */}
      {/* col-[16_/_span_16] */}
      {/* col-start and */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 grid grid-cols-subgrid gap-4 p-2 bg-slate-500">
          <div className="col-start-1">This is Main Grid</div>
          <div className="col-start-2">
            <CardGrid title="Sub Grid" details="this is subgrid" />
          </div>
        </div>
        <CardGrid
          title="Sub Grid"
          details="row span full"
          classParam="row-span-full"
        />
      </div>
      <h1>GRID AUTO COLUMN</h1>
      {/* auto-cols-max, auto-cols-min, auto-cols-fr, auto-cols-auto */}
      <div className="grid auto-cols-max grid-flow-col gap-2">
        <CardGrid title="auto column" details="row span full" classParam="" />
        <CardGrid title="auto column" details="row span full" classParam="" />
      </div>

      <h1>PLACE ITEMS</h1>
      {/* place-items-center, place-items-start, place-items-end, place-items-stretch, place-items-baseline */}
      <div className="grid grid-cols-3 place-items-center gap-4">
        <CardGrid title="place items" details="1" classParam="" />
        <CardGrid title="place items" details="2" classParam="" />
        <CardGrid title="place items" details="3" classParam="" />
      </div>
    </>
  );
};

export default Grid;
