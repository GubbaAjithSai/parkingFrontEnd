import './App.css';
import BookingForm from './BookingForm';
import CheckSlots from './CheckSlots';
import Home from './Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/BookingForm" element={<BookingForm />}/>
        <Route path="/CheckSlots" element={<CheckSlots />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </div>
  );
}

export default App;
