import { IsString, IsNotEmpty, IsMongoId, IsOptional } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    username: string;
    display_name: string;
    year_of_birth: number;
  }  