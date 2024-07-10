import "./styles/app.css";
import Header from "./modules/Header.jsx";
import Navigation from "./modules/Navigation.jsx";
import SwipePics from "./modules/SwipePics.jsx";
import AboutShort from "./modules/AboutShort.jsx";
import Form from "./modules/Form.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <SwipePics />
      <AboutShort />
      <Form />
    </>
  );
};
export default App;
