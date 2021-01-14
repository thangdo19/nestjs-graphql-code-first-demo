import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  login(): string {
    const token = this.jwtService.sign({ shit: 'shit' })
    return token
  }
}
