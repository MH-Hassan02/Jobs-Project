import { Suspense } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/appRoutes";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
