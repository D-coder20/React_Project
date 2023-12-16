import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am at the shop page</h1>;
};
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
