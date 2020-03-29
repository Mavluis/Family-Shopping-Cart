export interface AuthInfo {
  accessToken: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  uuid: string;
}
export interface Preferences {
  password?: string;
  newpassword?: string;
  repeatnewpass?: string;
  regularlist: string;
  note: string;
}

export interface ShopCartUser {
  fullName: string;
  uuid: string;
  email: string;
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
