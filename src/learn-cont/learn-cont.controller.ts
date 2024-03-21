import { Body, Controller, Get, Injectable, Param, Post, Delete ,Put} from '@nestjs/common';
import { PersonService } from './learn-service';
import { Person } from './interfeces/person.interface';
import { CreatePersonDto } from './dto/createPerson.dto';

@Controller('learn-cont')
@Injectable()
export class LearnContController {
    constructor(private readonly personService: PersonService) { }

    @Post()
    async create(@Body() createPersonDto: CreatePersonDto) {

        this.personService.create(createPersonDto);
    }

    @Get()
    async findAll(): Promise<Person[]> {
        return await this.personService.getUsers();
    }

    @Delete(':pId')
    async remove(@Param('pId') pId: string): Promise<void> {
        return await this.personService.remove(pId);
    }

    @Put(':pId')
    async update(@Param('pId') pId: string, @Body() person: Person): Promise<Person> {
      return await this.personService.update(pId, person);
    }

   
    }
    








