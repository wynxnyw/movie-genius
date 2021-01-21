import {User} from '../../../../models/user';

export async function getUsers() {
    const users = await User.find();
    return users;
}