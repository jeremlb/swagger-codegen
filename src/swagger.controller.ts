import { Controller, Get, HttpService } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import SwaggerParser from "@apidevtools/swagger-parser";

@Controller()
export class ValidationController {
  constructor(private http: HttpService) {}

  @ApiExcludeEndpoint()
  @Get('/validate-api')
  async validateApi() {
    const query = await this.http.get('http://localhost:3000/api-json').toPromise();

    try {
      let api = await SwaggerParser.validate(query.data);
      console.log("API name: %s, Version: %s", api.info.title, api.info.version);
      return `API name: ${api.info.title}, Version: ${api.info.version}`;
    }
    catch(err) {
      console.error(err);
      return `ERROR!`;
    }
  }
}
