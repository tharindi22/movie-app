import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
    return (
        <main>
            <Header/>
            <div className="pt-16">
               <Outlet />
            </div>
            <Footer/>
        </main>
    );
}

export default App;
