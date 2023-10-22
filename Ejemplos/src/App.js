import "./App.css";
import BooleanToggleComponent from "./components/BooleanToggle/BooleanToggle";
import CheckedState from "./components/CheckedState/CheckedState";
import CombinedHooksComponent from "./components/CombinedHooksComponent/CombinedHooksComponent";
import EffectStateComponent from "./components/EffectStateComponent/EffectStateComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import RefStateComponent from "./components/RefStateComponent/RefStateComponent";
import ShowHide from "./components/ShowHide/ShowHide";
const App = () => {
  return (
    <div className="App">
      <FormComponent />
      <BooleanToggleComponent />
      <CheckedState />
      <ShowHide />
      <ProgressBar />
      <RefStateComponent />
      <EffectStateComponent />
      <CombinedHooksComponent />
    </div>
  );
};

export default App;
