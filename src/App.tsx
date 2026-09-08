import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n";
import ScrollToTop from "@/components/ScrollToTop";
import Choice from "@/pages/Choice";
import Wedding from "@/pages/Wedding";
import Business from "@/pages/Business";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Choice />} />
          <Route path="/huwelijk" element={<Wedding />} />
          <Route path="/bedrijven" element={<Business />} />
          <Route path="*" element={<Choice />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
