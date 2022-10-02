import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Price from "./pages/Price/Price";
import ContactUs from "./pages/Contact/ContactUs";
import Ads from "./pages/PortfolioPages/Ads"
import CashCow from "./pages/PortfolioPages/CashCow"
import Cinematic from "./pages/PortfolioPages/Cinematic"
import Food from "./pages/PortfolioPages/Food"
import Historical from "./pages/PortfolioPages/Historical"
import Makeup from "./pages/PortfolioPages/Makeup"
import Motion from "./pages/PortfolioPages/Motion"
import MovieRecap from "./pages/PortfolioPages/MovieRecap"
import Podcast from "./pages/PortfolioPages/Podcast"
import RealEstate from "./pages/PortfolioPages/RealEstate"
import Sports from "./pages/PortfolioPages/Sports"
import Tiktoks from "./pages/PortfolioPages/Tiktoks"
import Vlogs from "./pages/PortfolioPages/Vlogs"
import Wedding from "./pages/PortfolioPages/Wedding"
import Youtube from "./pages/PortfolioPages/Youtube"
import GamePlay from "./pages/PortfolioPages/GamePlay"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Price />} />            
          <Route exact path="/ads" element={<Ads />} />
          <Route exact path="/cash-cow" element={<CashCow />} />
          <Route exact path="/Cinematic" element={<Cinematic />} />
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/historical" element={<Historical />} />
          <Route exact path="/makeup" element={<Makeup />} />
          <Route exact path="/motion" element={<Motion />} />
          <Route exact path="/movie-Recaps" element={<MovieRecap />} />
          <Route exact path="/podcast" element={<Podcast />} />
          <Route exact path="/real-estate" element={<RealEstate />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/tiktoks" element={<Tiktoks />} />
          <Route exact path="/vlogs" element={<Vlogs />} />
          <Route exact path="/wedding" element={<Wedding />} />
          <Route exact path="/youtube" element={<Youtube />} />
          <Route exact path="/game-play" element={<GamePlay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
