import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  birthDate: Date; 
}
