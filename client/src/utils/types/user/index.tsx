export type User = {
  readonly profilePicture: string;
  readonly firstName: string;
  readonly userId: string;
  readonly premiumExpirationDate: Date;
  readonly email: string;
  readonly oauthProvider: string;
} | null;
