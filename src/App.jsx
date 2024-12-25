import React from "react";
import AppRouter from "./router"; // Import the router
import { AuthProvider } from "./contexts/AuthContext"; // Wrap app with AuthContext
import "./styles/globals.css"; // Include Tailwind styles

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
