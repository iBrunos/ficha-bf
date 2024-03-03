import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Client } from './schemas/clients.schemas';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<Client>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;
    const client = await this.clientModel.findById(id);

    if (!client) {
      throw new UnauthorizedException('Login first to acess this endpoint.');
    }

    return client;
  }
}
