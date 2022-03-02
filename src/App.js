import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  ComponentPage,
  FileNotFoundPage,
  HomePage,
  LandingPage,
  SignUpPage,
  Test,
  CategoriesPage,
  ProductPage,
  CheckOutPage,
  LoginPage,
  //CategoryPage,
  ProfilePage,
  UnderConstructionPage,
} from "./pages";
import { Header, Footer } from "./components";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return (
            <>
              <Header /> <Component {...props} /> <Footer />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const App = () => {
  return (
    <div className="bg-C1-G min-h-screen">
      <div className="w-full max-w-7xl mx-auto bg-white">
        <Router>
          <Switch>
            <ProtectedRoute path="/login" exact component={LoginPage} />
            <ProtectedRoute path="/signup" exact component={SignUpPage} />
            <ProtectedRoute path="/profile" exact component={ProfilePage} />

            <ProtectedRoute
              path="/components-page"
              exact
              component={ComponentPage}
            />
            <ProtectedRoute path="/404" exact component={FileNotFoundPage} />
            <ProtectedRoute path="/landing" exact component={LandingPage} />
            <ProtectedRoute path="/test" exact component={Test} />
            <ProtectedRoute path="/checkout" exact component={CheckOutPage} />

            <ProtectedRoute
              path="/category/:categoryId"
              exact
              component={CategoriesPage}
            />
            <ProtectedRoute
              path="/product/:productid"
              exact
              component={ProductPage}
            />
            <ProtectedRoute path="/" exact component={HomePage} />
            <ProtectedRoute
              path="/coming-soon"
              exact
              component={UnderConstructionPage}
            />
            <Route>
              <FileNotFoundPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
