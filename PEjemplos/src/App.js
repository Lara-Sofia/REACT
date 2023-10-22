import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import TodoList from "./components/TodoList/TodoList";
import Toggle from "./components/Toggle/Toggle";
import Calculator from "./components/00-EjercicioParaPracticar/Calculator/Calculator";
import CurrencyConverter from "./components/01-EjercicioParaPracticar/CurrencyConverter/CurrencyConverter";
function App() {
  return (
    <div className="App">
      {/*<Toggle />
      <TodoList />
      <Timer />
      <Counter />
  <ColorPicker />*/}
      <Calculator />
      <CurrencyConverter />
    </div>
  );
}

export default App;
