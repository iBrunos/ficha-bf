import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Appearance } from './schemas/appearance.schemas';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Appearance.name)
    private appearanceModel: Model<Appearance>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;
    const appearance = await this.appearanceModel.findById(id);

    if (!appearance) {
      throw new UnauthorizedException('Login first to acess this endpoint.');
    }

    return appearance;
  }
}
