import jwt from 'jsonwebtoken';

export class JsonWebToken {
  static generateToken(user: {
    id?: string;
    email: string;
    password: string;
  }): string {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!,
    );
  }

  static verifyToken(currentJwt: string): Object {
    return jwt.verify(currentJwt, process.env.JWT_KEY!);
  }
}
