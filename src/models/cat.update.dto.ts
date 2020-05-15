import { CreateCatDto } from "./cat.create.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateCatDto extends PartialType(CreateCatDto) {}