import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'test@example.com', description: 'Email'})
  @IsString({message: 'Must be a string'})
  @IsEmail({}, {message: 'Incorrect email'})
  readonly email: string;

  @ApiProperty({example: '12345', description: 'Password'})
  @IsString({message: 'Must be a string'})
  @Length(4, 16, {message: 'Length must be from 4 to 16 symbols'})
  readonly password: string;
}