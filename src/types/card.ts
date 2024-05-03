export interface CardInfo {
  id: string;
  brand: Brand;
  numbers: string[];
  owner: string;
  expiration: string[];
  password: string[];
  securityCode: string;
  nickname: string;
  createdAt: string;
}

export interface Brand {
  label: string;
  color: string;
  bankId: string[];
}
