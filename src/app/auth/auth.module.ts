import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JWT_EXPIRES, JWT_SECRET } from "src/common/environments";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: JWT_EXPIRES }
    })
  ],
  providers: [
    AuthService,
    AuthResolver,
  ],
})
export class AuthModule {}