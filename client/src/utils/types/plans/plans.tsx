export interface PurchasePlan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
  stripePriceId: string;
}

export const monthlyPricing: PurchasePlan = {
  title: 'Monthly',
  cost: '$15',
  description: 'Monthly NinjaPrep subscription to quickly study for your upcoming interview.',
  backgroundColor: '#259af3',
  stripePriceId: process.env.REACT_APP_STRIPE_MONTHLY_PRICING || '',
};
export const yearlyPricing: PurchasePlan = {
  title: 'Yearly',
  cost: '$10',
  description: `Best for long term studying to never miss an algorithm interview question again`,
  backgroundColor: '#2a2a3a',
  stripePriceId: process.env.REACT_APP_STRIPE_YEARLY_PRICING || '',
};

export const planCards: PurchasePlan[] = [monthlyPricing, yearlyPricing];
