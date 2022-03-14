import logo from "./logo.svg";
import "./App.css";
import FloorPlan from "./FloorPlan";

function App() {
  const floorPlan = [
    {
      room: "Kitchen",
      contains: ["Oven", "Sink"],
    },
    {
      rooom: "LivingRoom",
    },
    {
      room: "Bedroom",
      bedNum: [1, 2, 3],
    },
    {
      room: "Bath",
      size: ["full", "half"],
    },
  ];
  return (
    <div>
      <FloorPlan floorPlan={floorPlan} />
    </div>
  );
}

export default App;
