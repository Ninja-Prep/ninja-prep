export interface Plan {
  title: string;
  description: string;
  cost: string;
  backgroundColor: string;
}

interface PlanCards {
  plans: Plan[];
}

export interface StripeInterface extends Plan {
  url: string;
}

export const PLAN_A: Plan = {
  title: 'Plan A',
  cost: '$35',
  description: 'Access to guided and convenient features, all in one platform.',
  backgroundColor: '#259af3',
};
export const PLAN_B = {
  title: 'Plan B',
  cost: '$35',
  description: 'Access to guided and convenient features, all in one platform.',
  backgroundColor: '#2a2a3a',
};

export const PlanCardsList: PlanCards = {
  plans: [PLAN_A, PLAN_B],
};
