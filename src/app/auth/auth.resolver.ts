import { UseGuards } from "@nestjs/common";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { GetUser } from "src/common/decorators/get-user.decorator";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
  ) {}

  @Query(() => String, { name: 'test' })
  @UseGuards(AuthGuard)
  test(@GetUser() user: any): string {
    return 'yia'
  }

  @Mutation(() => String)
  login(): string {
    return this.authService.login()
  }
}
