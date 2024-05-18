import Abril from "./components/Abril";
import Marzo from "./components/Marzo";
import Calendar from "./components/Calendar";
import Enero from "./components/Enero";
import Febrero from "./components/Febrero";
import Mayo from './components/Mayo';
import Junio from './components/Junio';
import Julio from './components/Julio';
import Agosto from './components/Agosto';
import Septiembre from './components/Septiembre';
import Octubre from './components/Octubre';
import Noviembre from './components/Noviembre';
import Diciembre from './components/Diciembre';
import './components/App.css';
function App() {
  return (
    <div className="App">
      <Calendar/>
      <Enero/>
      <Febrero/>
      <Marzo/>
      <Abril/>
      <Mayo/>
      <Junio />
      <Julio />
      <Agosto />
      <Septiembre />
      <Octubre />
      <Noviembre />
      <Diciembre />
    </div>
  );
}

export default App;
