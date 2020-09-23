import { Subjects } from '../../subjects';

interface ITicket {
  id: string;
}

export interface OrderCancelledvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: ITicket;
  };
}
