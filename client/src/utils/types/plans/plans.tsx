export interface PurchasePlan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
  stripePurchaseId: string;
}

export const PLAN_A: PurchasePlan = {
  title: 'Monthly',
  cost: '$15',
  description: 'Monthly NinjaPrep subscription to quickly study for your upcoming interview.',
  backgroundColor: '#259af3',
  stripePurchaseId: 'price_1JQ1BrD8LTDC9rJz7nYaAZMM',
};
export const PLAN_B: PurchasePlan = {
  title: 'Yearly',
  cost: '$10',
  description: `Best for long term studying to never miss an algorithm interview question again`,
  backgroundColor: '#2a2a3a',
  stripePurchaseId: 'price_1JQ1D9D8LTDC9rJzjH2aXzJX',
};

export const planCards: PurchasePlan[] = [PLAN_A, PLAN_B];
