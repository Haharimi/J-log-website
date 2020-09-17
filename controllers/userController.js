import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, emil, password, password2 },
  } = req;
  if (password !== password2) {
    // 비밀번호가 일치하지 않을 때
    res.status(400);
    res.render("join", { pageTitle: "회원가입" });
  } else {
    // 비밀번호가 일치할 때
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "프로필변경" });
export const changePassword = (req, res) => res.send("Change Password");
