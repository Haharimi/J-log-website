import routes from "./routes";

export const localsMiddleware = (rep, res, next) => {
  res.locals.siteName = "J-Log";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
