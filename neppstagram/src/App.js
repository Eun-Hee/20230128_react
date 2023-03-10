import { Route, Routes } from "react-router-dom";
import MainSection from "./components/common/MainSection";
import Auth from "./components/pages/Auth";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Search from "./components/pages/Search";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth 컴포너트는 Header 안보여줌 */}
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/" element={<MainSection />}>
          <Route path="" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="edit" element={<Edit />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
