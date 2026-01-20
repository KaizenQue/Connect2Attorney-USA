export interface TimelineItem {
  date: string;
  text: string;
}

export interface TimelineYearData {
  firstHalf: TimelineItem[]; 
  secondHalf: TimelineItem[];
}

export type TimelineData = Record<string, TimelineYearData>;
