export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: number;
}

export interface MarketDataPoint {
  time: string;
  value: number;
  benchmark: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}