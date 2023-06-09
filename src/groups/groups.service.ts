import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Api } from '../fetch/zendesk';
import { InjectRepository } from '@nestjs/typeorm';
import { Groups } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  DOMAIN: string = 'https://suzumlmhelp.zendesk.com/api/v2';
  PATH: string = '/groups'
  constructor(
    private readonly api: Api,
    @InjectRepository(Groups)
    private readonly groupsRepository: Repository<Groups>
  ) {}

  async syncGroups()
  : Promise<Groups[]> {
    const data = await this.api.get(this.DOMAIN, this.PATH);
    const groups = data.groups;

    return await this.groupsRepository.save(groups);
  }
}
