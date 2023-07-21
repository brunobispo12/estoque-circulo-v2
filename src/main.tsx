import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 8 hours
    },
  },
})

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
