import jwt_decode from 'jwt-decode';

export function decodeToken<T>(token: string): T | null {
  try {
    return jwt_decode(token);
  } catch (e) {
    return null;
  }
}
