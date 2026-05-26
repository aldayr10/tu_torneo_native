import { create } from 'zustand';

export interface Tournament {
  id: number;
  name: string;
  teams: number;
  status: string;
}

interface TournamentStore {
  tournaments: Tournament[];

  addTournament: (tournament: Tournament) => void;
}

export const useTournamentStore = create<TournamentStore>((set) => ({
  tournaments: [
    {
      id: 1,
      name: 'Champions Cup',
      teams: 8,
      status: 'En curso',
    },
  ],

  addTournament: (tournament) =>
    set((state) => ({
      tournaments: [
        ...state.tournaments,
        tournament,
      ],
    })),
}));