import "./App.css";
import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import reducer, { initialState } from "./reducer";
import { StateContext } from "./StateProvider";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <Switch>
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
