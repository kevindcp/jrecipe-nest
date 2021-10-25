import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import UpdateUserDto from './dto/updateUser.dto';
export default class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    hashPassword(password: string): Promise<string>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    createUser(userData: CreateUserDto): Promise<User>;
    updateUser(id: number, userData: UpdateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
    getUserRecipes(id: number): Promise<import("../recipes/recipe.entity").default[]>;
}
