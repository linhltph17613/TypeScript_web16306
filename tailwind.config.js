module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: them => ({
        'header-img': "url('https://i.imgur.com/5G0J8T4.jpg')",
        'home-banner': "url('https://i.imgur.com/U7UVfPa.jpg')",
        'banner-email': "url('https://i.imgur.com/SZOyDSM.jpg')"

      })
    },
  },
  plugins: [],
}
