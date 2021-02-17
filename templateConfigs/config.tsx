import Constants from 'expo-constants'

export const config = {
  parentURL: 'https://www.virsi.lv/',
  showLangugagePicker: true,
  dynamicColorsEnabled: false,
  fixedColorTheme: 'light',
  notificationsEnabled: true,
  notificationURL:
    'https://sz67dgtuqra7xfnybudiwv6moy.appsync-api.eu-west-1.amazonaws.com/graphql',
  notificationAPIKEY: Constants.manifest.extra.apiKey,
  // dark (FOR LIGHT THEMES), light (DARK THEMES), auto
  statusBar: 'dark',
}
