export default {
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
    buildNumber: "1.0.5",
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    package: "com.bidslatvija.virsi",
    versionCode: 1,
    useNextNotificationsApi: true,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },

  web: {
    favicon: "./assets/favicon.png",
  },

  extra: {
    apiKey: "da2-gk7qy234y5clpgtjp6mpetvf5q",
  },
};
