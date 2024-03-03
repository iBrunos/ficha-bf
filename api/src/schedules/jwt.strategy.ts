import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Schedule } from './schemas/schedule.schemas';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Schedule.name)
    private scheduleModel: Model<Schedule>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;
    const schedule = await this.scheduleModel.findById(id);

    if (!schedule) {
      throw new UnauthorizedException('Login first to acess this endpoint.');
    }

    return schedule;
  }
}
