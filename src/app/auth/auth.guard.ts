import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { ErrorMessage } from 'src/common/enums/error-message.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    /* Assign 'user' prop for request's reference */
    ctx.req['user'] = this.validateToken(ctx.req.headers['authorization'])
    return true;
  }

  validateToken(auth: string) {
    if (!auth) throw new UnauthorizedException(ErrorMessage.NO_TOKEN_PROVIDED)
    if (auth.split(' ')[0] !== 'Bearer') throw new UnauthorizedException(ErrorMessage.INVALID_TOKEN)
    const token = auth.split(' ')[1]
    const shit = this.jwtService.verify(token)
    return shit
  }
}
