export interface offerData {
  id: string;
  name: string;
  code: string;
  codeClassroom: string;
  linkClassroom: string;
  linkMeets: string;
  linkWpp: string;
  linkTel: string;
  timetables: Timetable[];
}
export interface Timetable {
  id: string;
  offerId: string;
  weekday: string;
  start_time: string;
  end_time: string;
  createdAt: string;
  updatedAt: string;
  offer_id: string;
}

export interface PropsOfferItem {
  offer: offerData;
  withActions: boolean;
  clickToRemove(): void;
}
