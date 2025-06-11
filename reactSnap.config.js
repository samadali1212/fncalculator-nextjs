
module.exports = {
  reactSnap: {
    source: "dist",
    destination: "dist",
    crawlFrom: "/",
    include: [
      "/",
      "/about",
      "/insurance", 
      "/events"
    ],
    userAgent: "ReactSnap",
    headless: true,
    waitFor: 1000,
    fixWebpackChunksIssue: false,
    removeBlobs: true,
    minifyHtml: {
      collapseWhitespace: false,
      removeComments: false
    }
  }
};
