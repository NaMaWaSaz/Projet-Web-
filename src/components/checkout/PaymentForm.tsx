import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreditCard, Calendar, Lock } from 'lucide-react';

const paymentSchema = z.object({
  cardNumber: z.string().min(16, 'Invalid card number'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid expiry date (MM/YY)'),
  cvv: z.string().length(3, 'Invalid CVV'),
  cardHolder: z.string().min(3, 'Cardholder name required'),
});

type PaymentForm = z.infer<typeof paymentSchema>;

interface PaymentFormProps {
  onSubmit: (data: PaymentForm) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const { register, formState: { errors } } = useForm<PaymentForm>({
    resolver: zodResolver(paymentSchema),
  });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Payment Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <div className="relative">
          <input
            {...register('cardNumber')}
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        {errors.cardNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <div className="relative">
            <input
              {...register('expiryDate')}
              type="text"
              placeholder="MM/YY"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          {errors.expiryDate && (
            <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <div className="relative">
            <input
              {...register('cvv')}
              type="text"
              placeholder="123"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cardholder Name
        </label>
        <input
          {...register('cardHolder')}
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.cardHolder && (
          <p className="text-red-500 text-sm mt-1">{errors.cardHolder.message}</p>
        )}
      </div>
    </div>
  );
}