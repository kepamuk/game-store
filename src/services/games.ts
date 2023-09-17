import { apiService } from './api';

export interface ResultData {
  status: number;
  error_message: string;
  result: Game[];
}

export interface Game {
  aspectRatio: string;
  demoGameAvailable: boolean;
  gameID: string;
  gameIdNumeric: number;
  gameName: string;
  gameTypeID: string;
  jurisdictions: string[];
  platform: string;
  technology: string;
  technologyID: string;
  typeDescription: string;
}

export const gameService = apiService.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<ResultData, null>({
      query: () => ({ method: 'GET', url: 'pragmatic/game_list' }),
    }),
  }),
});

// Auto-generated hooks
export const { useGetGamesQuery } = gameService;
