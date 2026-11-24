const productImages = import.meta.glob(
  "../assets/salon2/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const acrylicStandImage =
  productImages["../assets/salon2/salon2_AcrylicStand.jpg"];
const acrylicBlockImage =
  productImages["../assets/salon2/salon2_AcrylicBlock.jpg"];
const decoPhotoImage = productImages["../assets/salon2/salon2_DecoPhoto.jpg"];
const qAcrylicMagnetImage =
  productImages["../assets/salon2/salon2_QAcrylicMagnet.jpg"];
const cardsImage = productImages["../assets/salon2/salon2_Cards.jpg"];
const heartBadgeImage = productImages["../assets/salon2/salon2_HeartBadge.jpg"];
const namePlateImage = productImages["../assets/salon2/salon2_NamePlate.jpg"];
const sdImage = productImages["../assets/salon2/salon2_SD.jpg"];
const qAcrylicStandImage =
  productImages["../assets/salon2/salon2_QAcrylicStand.jpg"];
const keyringImage = productImages["../assets/salon2/salon2_Keyring.jpg"];
const badgeFrameImage = productImages["../assets/salon2/salon2_BadgeFrame.jpg"];

export const products = [
  {
    id: "salon2_AcrylicStand",
    name: "立牌",
    image: acrylicStandImage,
    price: 11.22,
    KRPrice: 15000,
    // TWPrice: 400,
    quantity: 0,
  },
  {
    id: "salon2_AcrylicBlock",
    name: "壓克力磚",
    image: acrylicBlockImage,
    price: 22.43,
    KRPrice: 30000,
    // TWPrice: 400,
    quantity: 0,
  },
  {
    id: "salon2_DecoPhoto",
    name: "拍立得",
    image: decoPhotoImage,
    price: 3.74,
    KRPrice: 5000,
    // TWPrice: 100,
    quantity: 0,
  },
  {
    id: "salon2_QAcrylicMagnet",
    name: "磁鐵",
    image: qAcrylicMagnetImage,
    price: 5.23,
    KRPrice: 7000,
    // TWPrice: 200,
    quantity: 0,
  },
  {
    id: "salon2_Cards",
    name: "小卡",
    image: cardsImage,
    price: 3.74,
    KRPrice: 5000,
    // TWPrice: 100,
    quantity: 0,
  },
  {
    id: "salon2_HeartBadge",
    name: "心型徽章",
    image: heartBadgeImage,
    price: 3.74,
    KRPrice: 5000,
    // TWPrice: 100,
    quantity: 0,
  },
  {
    id: "salon2_NamePlate",
    name: "吊飾",
    image: namePlateImage,
    price: 10.1,
    KRPrice: 13500,
    // TWPrice: 400,
    quantity: 0,
  },
  {
    id: "salon2_SD",
    name: "飯友",
    image: sdImage,
    price: 11.22,
    KRPrice: 15000,
    // TWPrice: 400,
    quantity: 0,
  },
  {
    id: "salon2_QAcrylicStand",
    name: "Q版立牌",
    image: qAcrylicStandImage,
    price: 11.22,
    KRPrice: 15000,
    // TWPrice: 400,
    quantity: 0,
  },
  {
    id: "salon2_QAcrylicStand",
    name: "Q版立牌",
    image: qAcrylicStandImage,
    price: 11.22,
    KRPrice: 15000,
    // TWPrice: 400,
    quantity: 0,
  },
  {
    id: "salon2_Keyring",
    name: "抱枕鑰匙圈",
    image: keyringImage,
    price: 16.45,
    KRPrice: 22000,
    // TWPrice: 600,
    quantity: 0,
  },
  {
    id: "salon2_BadgeFrame",
    name: "徽章展示架",
    image: badgeFrameImage,
    price: 12.71,
    KRPrice: 17000,
    // TWPrice: 500,
    quantity: 0,
  },
];
