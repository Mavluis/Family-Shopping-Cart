export interface AuthInfo {
  accessToken: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  uuid: string;
}

export interface Friend {
  _id: string;
  uuid: string;
  confirmed: boolean;
  createdAt: Date;
  confirmedAt: Date;
  rejectedAt?: any;
}

export interface Preferences {
  isPublicProfile: boolean;
  password?: string;
  twitter?: string;
  github?: string;
  description: string;
}

export interface ShoppingCartUser {
  uuid: string;
  fullName: string;
  email: string;
  friends: Friend[];
  avatarUrl: string;
  preferences: Preferences;
}

export interface Error {
  id: string;
  links: any;
  status: string;
  code: string;
  title: string;
  detail: string;
  source: {
    pointer: string;
    parameter: string;
  };
  meta: any;
  data: ErrorData;
}

export interface ErrorData {
  pattern: any;
  value: string;
  key: string;
  label: string;
}

export interface FriendRequest {
  uuid: string;
  avatarUrl: string;
  fullName: string;
  request: Request;
}

export interface Request {
  uuid: string;
  confirmed: boolean;
  createdAt: number;
  confirmedAt: number;
  rejectedAt: number;
}

export interface SearchResult {
  uuid: string;
  fullName: string;
  friends: Request[];
  avatarUrl?: any;
  preferences: Preferences;
}
