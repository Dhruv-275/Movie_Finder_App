import { Route, Routes } from "react-router";
import SignUp from "./components/public/signUp";
import Login from "./components/Public/login";
import ForgetPass from "./components/Public/forget";
import Home from "./pages/homePage";
import PrivateMiddleware from "./Middleware/private";
import PublicMiddleware from "./Middleware/public";
import MyLayout from "./Middleware/myLayout";
import About from "./pages/about";
import ContactUs from "./pages/contact";
import MovieDetails from "./components/private/movieDetails";
import MyFavoriteMovies from "./components/private/favoriteMov";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicMiddleware>
              <Login />
            </PublicMiddleware>
          }
        ></Route>

        <Route
          path="/signUp"
          element={
            <PublicMiddleware>
              <SignUp />
            </PublicMiddleware>
          }
        ></Route>

        <Route
          path="/forgetpass"
          element={
            <PublicMiddleware>
              <ForgetPass />
            </PublicMiddleware>
          }
        ></Route>

        <Route
          path="/"
          element={
            <PrivateMiddleware>
              <MyLayout>
                <Home />
              </MyLayout>
            </PrivateMiddleware>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <PrivateMiddleware>
              <MyLayout>
                <About />
              </MyLayout>
            </PrivateMiddleware>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <PrivateMiddleware>
              <MyLayout>
                <ContactUs />
              </MyLayout>
            </PrivateMiddleware>
          }
        ></Route>

        <Route
          path="/movie/:id"
          element={
            <PrivateMiddleware>
              <MyLayout>
                <MovieDetails />
              </MyLayout>
            </PrivateMiddleware>
          }
        ></Route>

        <Route
          path="/MyFavoriteMovies"
          element={
            <PrivateMiddleware>
              <MyLayout>
                <MyFavoriteMovies/>
              </MyLayout>
            </PrivateMiddleware>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
