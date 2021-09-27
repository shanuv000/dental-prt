import "./App.css";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Pg from "./pages/Pg";
// import Ug from "./pages/Ug";
import Ug2 from "./pages/Ug2";
import { UgProvider } from "./firebasestuff/UgContext";
// import Home2 from "./Home2";
import Footer from "./components/footer/Footer/Footer";
import Header from "./Header";
import Contact from "./pages/Contact";
// import FormUg from "./firebasestuff/FormUg";
// import Book1 from "./pages/Book1";
import Login from "./pages/Login";
// import Videos from "./pages/videos";
// import ContactTabler from "./firebasestuff/ContactTabler";
import Loader from "./components/Loading";
const Ug = React.lazy(() => import("./pages/Ug"));
const Videos = React.lazy(() => import("./pages/videos"));
const Book1 = React.lazy(() => import("./pages/Book1"));
const FormUg = React.lazy(() => import("./firebasestuff/FormUg"));

function App() {
  return (
    <UgProvider>
      <div className="App">
        <Suspense fallback={<Loader type="Puff" color="#00BFFF" />}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Pg" exact>
              <Pg />
            </Route>
            <Route path="/ug" exact>
              <Ug />
            </Route>

            <Route path="/admin" exact>
              <FormUg />
            </Route>
            <Route path="/ug/:first" exact>
              <Book1 />
            </Route>
            {/* <Route path="/admincontact" component={ContactTabler} /> */}
            <Route path="/login" component={Login} />
            <Route path="/ug2" component={Ug2} exact />
            {/*<Route path="/about" exact component={About} />*/}
            <Route path="/contact" exact component={Contact} />
            <Route path="/videos" exact component={Videos} />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    </UgProvider>
  );
}

export default App;
