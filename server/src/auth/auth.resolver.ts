import * as common from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { CheckUserArgs, LoginArgs, SignupArgs } from "./LoginArgs";
import { UserInfo } from "./UserInfo";
import { User } from "src/user/base/User";
import { Request } from "express";

@Resolver(UserInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => UserInfo)
  async login(@Args() args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => User)
  async me(@Context("req") request: Request): Promise<User> {
    return this.authService.me(request.headers.authorization);
  }
  @Query(() => User)
  async checkUser(@Args() args: CheckUserArgs): Promise<User> {
    return this.authService.checkUser(args.CheckUserValues.email);
  }
  @Mutation(() => UserInfo)
  async signup(@Args() args: SignupArgs): Promise<UserInfo> {
    return this.authService.signup(args.credentials);
  }

  @Query(() => UserInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async userInfo(@UserData() entityInfo: UserInfo): Promise<UserInfo> {
    return entityInfo;
  }
}
