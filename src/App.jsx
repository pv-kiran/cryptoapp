import AppRoutes from "./routes";
import ContextTheme from "./context/ContextTheme";

import "./App.css";
function App() {
  return (
    <ContextTheme>
      <AppRoutes></AppRoutes>
    </ContextTheme>
  );
}

export default App;
