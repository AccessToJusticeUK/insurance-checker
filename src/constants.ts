export const API_URL: string = process.env.NODE_ENV === 'production' ?
  'http://insurance-checker-api.herokuapp.com' : 'http://localhost:3004';