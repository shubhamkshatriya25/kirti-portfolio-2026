import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { CvePage } from "./components/CVEs/Page";
import { HonoursPage } from "./components/Honours/Page";
import { PortfolioPage } from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="bg-effects" aria-hidden="true">
        <div className="grid" />
        <div className="scanlines" />
        <div className="noise" />
      </div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cves" element={<CvePage />} />
          <Route path="/honours" element={<HonoursPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog/:slug" element={<BlogPost />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
