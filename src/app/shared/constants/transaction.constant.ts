import { Transactions } from '../interfaces/transaction.interface';

export const TRANSACTION: Transactions[] = [
  {
    label: 'Hamleys',
    icon: 'assets/file-storage.svg',
    bgColor: '#009DFF1A',
    transaction_date: '20 May 2020',
    amount: 'S$ 150',
    type: 'Refund on debit card',
    is_credit: true,
  },
  {
    label: 'Hamleys',
    icon: 'assets/flights.svg',
    bgColor: '#00D6B51A',
    transaction_date: '20 May 2020',
    amount: 'S$ 150',
    type: 'Charged to debit card',
    is_credit: false,
  },
  {
    label: 'Hamleys',
    icon: 'assets/megaphone.svg',
    bgColor: '#F251951A',
    transaction_date: '20 May 2020',
    amount: 'S$ 150',
    type: 'Charged to debit card',
    is_credit: false,
  },
  {
    label: 'Hamleys',
    icon: 'assets/file-storage.svg',
    bgColor: '#009DFF1A',
    transaction_date: '20 May 2020',
    amount: 'S$ 150',
    type: 'Charged to debit card',
    is_credit: false,
  },
];
