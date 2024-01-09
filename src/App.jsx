import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import News from "./pages/News";

function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
