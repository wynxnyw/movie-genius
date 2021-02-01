import {User} from '../../../../models/user';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {envConfig} from "../../../../../config";
import { UserInputError } from 'apollo-server';

export async function registerUser(_: any, {registerInput: { username, email, password }}: any, context: any, info: any){

    // validate data

    const emailMatch = !!await User.findOne({email});
    const usernameMatch = !!await User.findOne({username});

    if(emailMatch) {
        throw new UserInputError('Email is taken', {})
    } if(usernameMatch) {
        throw new UserInputError('Username is taken', {})
    }
    else {
        password = await bcrypt.hash(password, 12)

        const user = new User({
            email,
            username,
            password
        })

        const res: any = await user.save();
        const token = jwt.sign({
            id: res.id,
            email: res.email,
            username: res.username
        }, envConfig.apiSecret, {expiresIn: '1h'})

        return {
            ...res._doc,
            id: res._id,
            token
        }
    }

}