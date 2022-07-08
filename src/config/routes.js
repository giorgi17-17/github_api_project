import AuthGuard from "../components/AuthGuard";
import GuestGuard from "../components/GuestGuard";
import { Dashboard, Searchs, Signin, Signup, User } from "./pages";

const ROUTES = {
  DASHBOARD: "/",
  USER: "/user/:title",
  SEARCHS: "/searchs",
  FAVORITES: "/favorites",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: Signup,
  },
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: Signin,
  },
  {
    path: ROUTES.DASHBOARD,
    guard: AuthGuard,
    page: Dashboard,
  },
  {
    path: ROUTES.SEARCHS,
    guard: AuthGuard,
    page: Searchs,
  },
  {
    path: ROUTES.USER,
    guard: AuthGuard,
    page: User,
  },
];

export default ROUTES;
export { ROUTES_CONFIG };
