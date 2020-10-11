import routes from "../routes";
import User from "../model/User";
import passport from "passport";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "회원가입" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  // To do : 로그아웃 처리하기
  res.redirect(routes.home);
};

export const users = (req, res) => res.send("Users");

export const userDetail = (req, res) => res.send("User Detail");

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "프로필변경" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "비밀번호 변경" });
