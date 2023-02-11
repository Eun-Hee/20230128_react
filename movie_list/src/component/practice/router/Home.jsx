import { Outlet } from "react-router-dom";

// src/component/practice/router
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}

export default Home;
