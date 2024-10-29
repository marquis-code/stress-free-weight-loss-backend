/* eslint-disable prettier/prettier */
// create-subscription.dto.ts
export class CreateSubscriptionDto {
    userId: string;
    amount: number;
    currency: string;
    paymentPlan: string; // 'basic' or 'premium'
    startDate?: Date;
    endDate?: Date;
  }
  