import { Timestamp } from '@angular/fire/firestore';

export interface CalendarEventFirestore {
  id: string;
  title: string;
  location: string;
  startDate: Timestamp;
  endDate: Timestamp;
  notes: string;
}

export interface CalendarEvent extends Omit<CalendarEventFirestore, 'startDate' | 'endDate'> {
  startDate: Date;
  endDate: Date;
}

export const fromFirestoreData = (data: CalendarEventFirestore): CalendarEvent => {
  return {
    ...data,
    startDate: data.startDate.toDate(),
    endDate: data.endDate.toDate(),
  };
};

export const fromFirestoreDataArray = (data: CalendarEventFirestore[]): CalendarEvent[] => {
  return data.map(fromFirestoreData);
};
