const productImages = import.meta.glob(
  "../assets/anniversaryCelebration/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const fridgeImage =
  productImages["../assets/anniversaryCelebration/ac_Fridge.png"];
const acrylicBoardImage =
  productImages["../assets/anniversaryCelebration/ac_AcrylicBoard.png"];
const letterOpenerImage =
  productImages["../assets/anniversaryCelebration/ac_LetterOpener.png"];
const letterOpenerImages = [
  letterOpenerImage,
  productImages["../assets/anniversaryCelebration/ac_LetterOpener_mika.png"],
  productImages["../assets/anniversaryCelebration/ac_LetterOpener_mikaBox.png"],
  productImages["../assets/anniversaryCelebration/ac_LetterOpener_yu.png"],
  productImages["../assets/anniversaryCelebration/ac_LetterOpener_yuBox.png"],
];
const acrylicStandImage =
  productImages["../assets/anniversaryCelebration/ac_AcrylicStandA.png"];
const acrylicStandImages = [
  acrylicStandImage,
  productImages["../assets/anniversaryCelebration/ac_AcrylicStandB.png"],
];
const badgeImage =
  productImages["../assets/anniversaryCelebration/ac_Badge.png"];
const idPhotoImage =
  productImages["../assets/anniversaryCelebration/ac_IDPhoto.png"];
const sceneAcrylicStandImage =
  productImages["../assets/anniversaryCelebration/ac_SceneAcrylicStandA.png"];
const sceneAcrylicStandImages = [
  sceneAcrylicStandImage,
  productImages["../assets/anniversaryCelebration/ac_SceneAcrylicStandB.png"],
  productImages["../assets/anniversaryCelebration/ac_SceneAcrylicStandC.png"],
  productImages["../assets/anniversaryCelebration/ac_SceneAcrylicStandD.png"],
  productImages["../assets/anniversaryCelebration/ac_SceneAcrylicStandE.png"],
];
const largeStickerImage =
  productImages["../assets/anniversaryCelebration/ac_LargeSticker_mika.png"];
const largeStickerImages = [
  largeStickerImage,
  productImages["../assets/anniversaryCelebration/ac_LargeSticker_yu.png"],
];
const sceneStickerImage =
  productImages["../assets/anniversaryCelebration/ac_SceneSticker.png"];
const metalBookmarkImage =
  productImages["../assets/anniversaryCelebration/ac_MetalBookmark_mika.png"];
const metalBookmarkImages = [
  metalBookmarkImage,
  productImages["../assets/anniversaryCelebration/ac_MetalBookmark_yu.png"],
];
const folderImage =
  productImages["../assets/anniversaryCelebration/ac_Folder_mika.png"];
const folderImages = [
  folderImage,
  productImages["../assets/anniversaryCelebration/ac_Folder_yu.png"],
];

export const products = [
  {
    id: "ac_Fridge",
    name: "冰箱貼磁鐵(盒裝)",
    image: fridgeImage,
    price: 6160,
    quantity: 0,
  },
  {
    id: "ac_AcrylicBoard",
    name: "A5壓克力畫板",
    image: acrylicBoardImage,
    price: 2200,
    quantity: 0,
  },
  {
    id: "ac_AcrylicStand",
    name: "立牌",
    image: acrylicStandImage,
    images: acrylicStandImages,
    price: 1980,
    quantity: 0,
  },
  {
    id: "ac_LetterOpener",
    name: "拆信刀",
    image: letterOpenerImage,
    images: letterOpenerImages,
    price: 3850,
    quantity: 0,
  },
  {
    id: "ac_Badge",
    name: "徽章(盒裝)",
    image: badgeImage,
    price: 3300,
    quantity: 0,
  },
  {
    id: "ac_IDPhoto",
    name: "證件照貼紙(盒裝)",
    image: idPhotoImage,
    price: 4125,
    quantity: 0,
  },

  {
    id: "ac_SceneAcrylicStand",
    name: "名場面立牌",
    image: sceneAcrylicStandImage,
    images: sceneAcrylicStandImages,
    price: 1100,
    quantity: 0,
  },
  {
    id: "ac_LargeSticker",
    name: "大貼紙",
    image: largeStickerImage,
    images: largeStickerImages,
    price: 550,
    quantity: 0,
  },
  {
    id: "ac_MetalBookmark",
    name: "金屬書籤",
    image: metalBookmarkImage,
    images: metalBookmarkImages,
    price: 1650,
    quantity: 0,
  },
  {
    id: "ac_SceneSticker",
    name: "名場面貼紙(盒裝)",
    image: sceneStickerImage,
    price: 6600,
    quantity: 0,
  },
  {
    id: "ac_Folder",
    name: "資料夾",
    image: folderImage,
    images: folderImages,
    price: 440,
    quantity: 0,
  },
];
