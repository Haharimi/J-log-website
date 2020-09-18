import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To do : upload and save videos
  res.redirect(routes.videoDetail(121212));
};

export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
  // pageTitle을 현재 비디오의 제목으로 변경하길원함!
};

export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
