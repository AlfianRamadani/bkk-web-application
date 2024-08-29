import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    // <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <App />
            
            <ReactQueryDevtools />
          </HelmetProvider>
        </QueryClientProvider>
      </BrowserRouter>
      
    // </React.StrictMode> 
  );
}
