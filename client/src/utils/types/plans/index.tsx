export interface Plan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
}

export interface StripeInterface extends Plan {
  url: string;
}
