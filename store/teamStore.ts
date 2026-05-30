import { create } from 'zustand';

export interface Team {
  id: number;
  name: string;
  players: number;
  victories: number;
  tournaments: number;
}

interface TeamStore {
  teams: Team[];

  addTeam: (team: Team) => void;

  updateTeam: (id: number, updatedTeam: Partial<Team>) => void;

  deleteTeam: (id: number) => void;

  getTeamById: (id: number) => Team | undefined;
}

export const useTeamStore = create<TeamStore>((set, get) => ({
  teams: [
    {
      id: 1,
      name: 'Los Guerreros',
      players: 12,
      victories: 8,
      tournaments: 3,
    },
    {
      id: 2,
      name: 'Titanes FC',
      players: 10,
      victories: 5,
      tournaments: 2,
    },
  ],

  addTeam: (team) =>
    set((state) => ({
      teams: [...state.teams, team],
    })),

  updateTeam: (id, updatedTeam) =>
    set((state) => ({
      teams: state.teams.map((team) =>
        team.id === id
          ? { ...team, ...updatedTeam }
          : team
      ),
    })),

  deleteTeam: (id) =>
    set((state) => ({
      teams: state.teams.filter(
        (team) => team.id !== id
      ),
    })),

  getTeamById: (id) =>
    get().teams.find((team) => team.id === id),
}));