import { Subjects } from '../../subjects';
import { OrderStatus } from '../../types/orderStatus';

interface ITicket {
  id: string;
  price: number;
}

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: ITicket;
  };
}
