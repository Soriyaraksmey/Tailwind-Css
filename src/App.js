import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
//email project
import Emailcard from "./components/MiniProject/Emailcard";
import Errorpage from "./components/pages/Errorpage";
import Pricinggrid from "./components/MiniProject/Pricinggrid";
import Productmodal from "./components/MiniProject/Productmodal";
import Imagegellery from "./components/MiniProject/Imagegellery";
import Loginmodal from "./components/MiniProject/Loginmodal";
//website project
import Clipboard from "./components/website/Clipboard.jsx";
import LoopStudio from "./components/website/LoopStudio";
import Logindribble from "./components/redesign/logindribble";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/emailcard" element={<Emailcard />} />
        <Route path="/pricinggrid" element={<Pricinggrid />} />
        <Route path="/productmodal" element={<Productmodal />} />
        <Route path="/imagegallery" element={<Imagegellery />} />
        <Route path="/loginmodal" element={<Loginmodal />} />\
        <Route path="/CilpboardWebsite" element={<Clipboard />} />
        <Route path="/LoopStudio" element={<LoopStudio />} />
        <Route path="/dribble-redesign" element={<Logindribble />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
