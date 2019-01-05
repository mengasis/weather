function validateWidth(width) {
  if (width <= 700) return 700
  if (width >= 1024) return 1024

  return width
}

export default {
  cl: {
    name: 'Santiago',
    image: width =>
      `https://images.unsplash.com/photo-1441484295955-db07de1fdbad?fit=crop&w=${validateWidth(
        width
      )}`
  },
  ch: {
    name: 'Zurich',
    image: width =>
      `https://images.unsplash.com/photo-1515488764276-beab7607c1e6?fit=crop&w=${validateWidth(
        width
      )}`
  },
  nz: {
    name: 'Auckland',
    image: width =>
      `https://images.unsplash.com/photo-1507699622108-4be3abd695ad?fit=crop&w=${validateWidth(
        width
      )}`
  },
  au: {
    name: 'Sydney',
    image: width =>
      `https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?fit=crop&w=${validateWidth(
        width
      )}`
  },
  uk: {
    name: 'Londres',
    image: width =>
      `https://images.unsplash.com/photo-1529180184525-78f99adb8e98?fit=crop&w=${validateWidth(
        width
      )}`
  },
  usa: {
    name: 'Georgia',
    image: width =>
      `https://images.unsplash.com/photo-1443557661966-8b4795a6f62c?fit=crop&w=${validateWidth(
        width
      )}`
  }
}
