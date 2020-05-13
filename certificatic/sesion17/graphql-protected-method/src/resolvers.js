import personJsonData from './json/person.json'

export default {
  Query: {
    login: async (_, { email, password }, { dataSources }) =>
      await dataSources.authAPI.getToken({ email, password }),
    isValidToken: async (_, { token }, { dataSources }) =>
      await dataSources.authAPI.verifyToken(token),
    person: (_, {id},{dataSources})=> 
      dataSources.personJsonData.getPerson(id),
    persons:(_, __, {dataSources}) =>
    dataSources.personAPI.getAllPerson()
  },

  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    }
  }
}