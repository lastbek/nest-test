import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'test@example.com', description: 'Email'})
  readonly email: string;

  @ApiProperty({example: '12345', description: 'Password'})
  readonly password: string;
}