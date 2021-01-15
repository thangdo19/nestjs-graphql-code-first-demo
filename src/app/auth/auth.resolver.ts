import { UseGuards } from "@nestjs/common";
import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
  ) {}

  @Query(() => String, { name: 'test' })
  @UseGuards(AuthGuard)
  test(): string {
    return 'yia'
  }

  @Mutation(() => String)
  login(): string {
    return this.authService.login()
  }
}
