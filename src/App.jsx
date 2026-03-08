// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from "react-router";
import { Header } from "./Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">© 2025 Hong Le, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
