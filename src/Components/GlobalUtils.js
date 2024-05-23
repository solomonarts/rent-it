// import "../Assets/images/bg"

function importAll(r) {
  let images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const cardimages = importAll(
  require.context("../Assets/images/bg/cards", false, /\.(png|jpe?g|svg|webp)$/)
);

const avatarimages = importAll(
  require.context("../Assets/images/avatars", false, /\.(png|jpe?g|svg|webp)$/)
);

export { cardimages, avatarimages };
