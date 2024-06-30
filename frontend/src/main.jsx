import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContext";
// import customFetch from "./utils/customFetch.js";

// const res = await customFetch.get("/api/v1/hotels");
// console.log(res.data);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f8fafc",
            color: "#0f172a",
          },
        }}
      />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </>,
);
