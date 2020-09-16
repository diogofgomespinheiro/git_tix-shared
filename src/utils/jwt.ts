import jwt from 'jsonwebtoken';

export class JsonWebToken {
  static generateToken(
    payload: {
      id?: string;
      email: string;
      password?: string;
    },
    jwtKey = process.env.JWT_KEY!,
  ): string {
    return jwt.sign(
      {
        id: payload.id,
        email: payload.email,
      },
      jwtKey,
    );
  }

  static verifyToken(currentJwt: string): Object {
    return jwt.verify(currentJwt, process.env.JWT_KEY!);
  }
}
