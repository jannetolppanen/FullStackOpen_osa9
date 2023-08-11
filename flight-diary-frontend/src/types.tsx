export interface FlightDiaryEntry {
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment?: string;
}

export type NewEntry = Omit<FlightDiaryEntry, 'id'>

export interface AddProps {
  diaryEntryCreation: (entry: NewEntry) => void;
}