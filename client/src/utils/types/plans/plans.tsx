export interface PurchasePlan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
  stripePriceId: string;
}

export const monthlyPricing: PurchasePlan = {
  title: 'One Month',
  cost: '$15',
  description: 'Single month subscription to quickly study for your upcoming interview',
  backgroundColor: '#259af3',
  stripePriceId: process.env.REACT_APP_STRIPE_MONTHLY_PRICING || '',
};
export const yearlyPricing: PurchasePlan = {
  title: '3 Months',
  cost: '$30',
  description: `Best for long term studying to never miss an algorithm interview question again`,
  backgroundColor: '#DB6A00',
  stripePriceId: process.env.REACT_APP_STRIPE_YEARLY_PRICING || '',
};

export const planCards: PurchasePlan[] = [monthlyPricing, yearlyPricing];
