import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gift from "./pages/Gift";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
