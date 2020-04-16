const {ApolloServer, gql} = require ('apollo-server')

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query{
        books:[Book]
    }
`
const libros =[
    {
        title:"Reconfiguracion financiera",
        author:"Alejandro Saracho"
    },
    {
        title:"Juego de tronos",
        author:"George R. R. Martin"
    },
    {
        title:"La guerra y la paz.",
        author:"Leon Tolstoi"
    },
    {
        title:"El origen.",
        author:"Dan Brown"
    },
    {
        title:"No es lo que dices, sino como lo dices",
        author:"Michael Parker"
    },
    {
        title:"Los cuatro acuerdos",
        author:"Miguel Angel Ruiz Macias"
    },
]

const resolvers ={
    Query: {
        books:() => libros
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
})