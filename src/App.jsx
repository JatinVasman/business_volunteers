import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/918586989832?text=Hey%20there%21%20I%20saw%20your%20website%20and%20wanted%20to%20chat"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <img
          src="/logo/whatsapp-logo.png"
          alt="Chat with us on WhatsApp"
          className="w-[60px] h-[60px] rounded-full shadow-lg hover:scale-105 transition-transform"
        />
      </a>
    </>
  );
}

export default App;
