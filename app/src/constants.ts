export const API_URL: string = process.env.NODE_ENV === 'production' ?
  'https://insurancecheckerapi.herokuapp.com' : 'http://localhost:3004';