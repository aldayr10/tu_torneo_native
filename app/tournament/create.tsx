import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

import { router } from 'expo-router';

import { useTournamentStore } from '../../store/tournamentStore';

export default function CreateTournamentScreen() {

  const { addTournament, tournaments } =
    useTournamentStore();

  const [name, setName] = useState('');
  const [teams, setTeams] = useState('');

  const handleCreateTournament = () => {

    if (!name || !teams) return;

    addTournament({
      id: tournaments.length + 1,
      name,
      teams: Number(teams),
      status: 'Próximamente',
    });

    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
        padding: 24,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: '700',
          marginBottom: 10,
        }}
      >
        Crear Torneo
      </Text>

      <Text
        style={{
          color: '#94A3B8',
          marginBottom: 40,
          fontSize: 16,
        }}
      >
        Organiza un nuevo torneo
      </Text>

      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: 'white',
            marginBottom: 8,
          }}
        >
          Nombre torneo
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Ej: Summer Cup"
          placeholderTextColor="#64748B"
          style={{
            backgroundColor: '#1E293B',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 16,
            fontSize: 16,
          }}
        />
      </View>

      <View
        style={{
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            marginBottom: 8,
          }}
        >
          Cantidad equipos
        </Text>

        <TextInput
          value={teams}
          onChangeText={setTeams}
          keyboardType="numeric"
          placeholder="Ej: 16"
          placeholderTextColor="#64748B"
          style={{
            backgroundColor: '#1E293B',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 16,
            fontSize: 16,
          }}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleCreateTournament}
        style={{
          backgroundColor: '#7C3AED',
          paddingVertical: 18,
          borderRadius: 18,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '700',
          }}
        >
          Guardar Torneo
        </Text>
      </TouchableOpacity>
    </View>
  );
}