import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
//import { UsersRespository } from './repositories/users.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([UsersRespository])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UsersController],
})
export class UserModule {}
