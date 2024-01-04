import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { AppThemeProvider } from "./shared/contexts"
export const App = () => {
  return (
    <div>
       <AppThemeProvider>
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
       </AppThemeProvider>
    </div>
  );
}

