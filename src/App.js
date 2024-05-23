import "./App.css";
// import Categories from "./Components/Categories/Categories";
import Filter from "./Components/Filter/Filter";
import Homes from "./Components/Homes/Homes";
import Main from "./Components/Main";
import TopNav from "./Components/Navbar/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadlogo from "./Assets/images/icons/loadlogo.png";
import HomeView from "./Components/SingleViews/HomeView";
import Signup from "./Components/Auth/Signup";
import { useEffect, useState } from "react";
import Forms from "./Components/Forms/Forms";
import UserProfile from "./Components/User/UserProfile";
import Notifications from "./Components/User/Notifications";
// import Searchbar from "./Components/Searchbar/Searchbar";

function App() {
  const [intro, setintro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setintro(false);
    }, 4000);
  }, []);
  return (
    <div className="App bg-slate-100 relative">
      {intro && (
        <div className="fixed top-0 left-0 h-full w-full bg-white z-50 flex justify-center items-center">
          <img
            src={loadlogo}
            className="animate-bounce h-auto w-[90px] aspect-square"
            alt="loading logo"
            // style={{
            //   filter: "drop-shadow(35px 28px 3px black)",
            // }}
          />
        </div>
      )}

      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single-home" element={<HomeView />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/create-listing" element={<Forms />} />
          <Route path="/profile/*" element={<UserProfile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
