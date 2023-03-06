export interface AnalyticsResponse {
  relevantFTData: FTData[];
  historicalFTData: HistoricalFTData[];
}

export interface FTData {
  contractId: string;
  symbol: string;
  amount: string;
  price: number;
  volume: string;
}

export interface HistoryFTInfo {
  date: string;
  amount: string;
  price: number | null;
  volume: string | null;
}

export interface HistoricalFTData {
  contractId: string;
  symbol: string;
  history: HistoryFTInfo[];
}
