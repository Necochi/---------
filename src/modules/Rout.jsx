import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Main from "../routes/Main.jsx";
import About from "../routes/About.jsx";
import Booking from "../routes/Booking.jsx";
import Contacts from "../routes/Contacts.jsx";

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
};

export default Rout;