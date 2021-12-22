export interface PurchasePlan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
  stripePriceId: string;
  premiumTime: number;
  bestValue?: boolean;
}

export const oneMonthPricing: PurchasePlan = {
  title: 'One Month',
  premiumTime: 1000 * 60 * 60 * 24 * 30,
  cost: '$14.99',
  description: 'Single month subscription to quickly study for your upcoming interview',
  backgroundColor: '#259af3',
  stripePriceId: process.env.REACT_APP_STRIPE_ONE_MONTH || '',
};
export const threeMonthPricing: PurchasePlan = {
  title: '3 Months',
  cost: '$29.99',
  premiumTime: 1000 * 60 * 60 * 24 * 30 * 3,
  description: `Best for long term studying to never miss an algorithm interview question again`,
  backgroundColor: '#DB6A00',
  stripePriceId: process.env.REACT_APP_STRIPE_3_MONTH || '',
  bestValue: true,
};

export const planCards: PurchasePlan[] = [oneMonthPricing, threeMonthPricing];
