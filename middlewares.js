import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "J-Log";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    // req.user가 존재한다면, 즉 로그인된 상태라면 home으로 redirect
    res.redirect(routes.home);
  } else {
    // req.user가 존재하지 않는다면, 즉 로그아웃된 상태라면 다음으로 진행
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    // req.user가 존재한다면, 즉 로그인된 상태라면 다음으로 진행
    next();
  } else {
    // req.user가 존재하지않는다면, 즉 로그아웃된 상태라면 홈으로
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
