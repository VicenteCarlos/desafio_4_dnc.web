import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { ToastContainer } from "react-toastify";

export const App = () => (
  <>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
    />
    <Header />
    <Main />
  </>
);
