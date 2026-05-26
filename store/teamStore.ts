import { create } from 'zustand';

export interface Team {
  id: number;
  name: string;
  players: number;
}

interface TeamStore {
  teams: Team[];

  addTeam: (team: Team) => void;
}

export const useTeamStore = create<TeamStore>((set) => ({
  teams: [
    {
      id: 1,
      name: 'Los Guerreros',
      players: 12,
    },
    {
      id: 2,
      name: 'Titanes FC',
      players: 10,
    },
  ],

  addTeam: (team) =>
    set((state) => ({
      teams: [...state.teams, team],
    })),
}));