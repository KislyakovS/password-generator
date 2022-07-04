export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'Dark',
    list: [
      { name: 'Dark', class: 'dark', color: '#191d24' },
      { name: 'Light', class: 'light', color: '#f6f8fa' }
    ],
  },
}
