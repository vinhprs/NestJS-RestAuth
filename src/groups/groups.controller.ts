import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Groups } from './entities/group.entity';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Get()
  async syncGroups()
  : Promise<Groups[]> {
    return this.groupsService.syncGroups();
  }
}
