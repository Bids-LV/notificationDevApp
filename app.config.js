export default {
  expo: {
    name: "NotificationTemplate",
    slug: "NotificationTemplate",
    version: "1.0.0",
    orientation: "portrait",
    scheme: "notificationtemplate",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    userInterfaceStyle: "automatic",
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],

    ios: {
      bundleIdentifier: "com.bidslatvija.NotificationTemplate",
      googleServicesFile: "./GoogleService-Info.plist",
    },
    android: {
      package: "com.bidslatvija.NotificationTemplate",
      googleServicesFile: "./google-services.json",
    },
    web: {
      config: {
        firebase: {
          apiKey: "AIzaSyBaQIsuL1b5Eq8_AI9VmZQ2Inpgs9Ez43I",
          appId: "1:451249225286:web:4ed27067b9eeac74431447",
          measurementId: "G-CEJMCC933D",
        },
      },
    },
    extra: {
      apiKey: "da2-gk7qy234y5clpgtjp6mpetvf5q",
    },
  },
};
