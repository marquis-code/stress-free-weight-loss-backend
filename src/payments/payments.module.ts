// // payments.module.ts
// import { Module } from '@nestjs/common';
// import { HttpModule } from '@nestjs/axios';
// import { MongooseModule } from '@nestjs/mongoose';
// import { PaymentsService } from './payments.service';
// import { PaymentsController } from './payments.controller';
// import { Payment, PaymentSchema } from './schemas/payment.schema';
// import { UsersModule } from '../users/users.module';
// import { ConfigModule } from '@nestjs/config';
// import { SubscriptionsModule } from '../subscriptions/subscriptions.module';

// @Module({
//   imports: [
//     HttpModule,
//     ConfigModule,
//     MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
//     UsersModule,
//     SubscriptionsModule,
//   ],
//   providers: [PaymentsService],
//   controllers: [PaymentsController],
// })
// export class PaymentsModule {}


import { Module, forwardRef } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
    forwardRef(() => UsersModule),
    forwardRef(() => SubscriptionsModule)
  ],
  providers: [PaymentsService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}