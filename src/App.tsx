import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

