import { ApiProperty } from "@nestjs/swagger";

export class CatDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  birthDate: Date;
}