import {registerUser} from './mutations'
import {getUsers} from './queries'

export const userResolvers = {
    Query: {
        getUsers
    },
    Mutation: {
        registerUser
    }
}