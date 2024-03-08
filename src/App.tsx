import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
