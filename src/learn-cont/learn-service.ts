import { Injectable } from '@nestjs/common';
import { Person } from './interfeces/person.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/createPerson.dto'
import { UserDocument } from './modells/person.modells';


@Injectable()
export class PersonService {
    constructor(@InjectModel(Person.name) private readonly personModel: Model<UserDocument>) { }

    create(CreatePersonDto: CreatePersonDto) {
        return this.personModel.create({ ...CreatePersonDto });
    }

    async getUsers() {
        return await this.personModel.find()
    }

    //   async findById(pId: string): Promise<Person | undefined> {
    //     return this.persons.find(person => person.pId === pId);
    //   }


    async remove(pId: string): Promise<any> {
        console.log(pId);
        try {
            return this.personModel.findOneAndDelete({ pId: pId });
        } catch (error) {
            console.error('erru');

        }


    }


    async update(pId: string, person: Person) {
        try {

            const updatedUser = await this.personModel.findOneAndUpdate(
                { pId: pId },
                person,
                { new: true }
            );
            console.log(updatedUser);

            return updatedUser;

        } catch (error) {
            console.error('Failed to update user:', error);
        }
    }
}

    