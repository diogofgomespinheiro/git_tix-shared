import { Subjects } from '../../subjects';

interface ITicket {
  id: string;
}

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: ITicket;
  };
}
