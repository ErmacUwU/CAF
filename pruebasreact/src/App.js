import Abril from "./components/Abril";
import Marzo from "./components/Marzo";
import Calendar from "./components/Calendar";
import Enero from "./components/Enero";
import Febrero from "./components/Febrero";

function App() {
  return (
    <div className="App">
      <Calendar/>
      <Enero/>
      <Febrero/>
      <Marzo/>
      <Abril/>
    </div>
  );
}

export default App;
