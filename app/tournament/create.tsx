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

  const [teamsError, setTeamsError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleCreateTournament = () => {

    setTeamsError('');
    setNameError('');

    if (!name.trim()) {
      setNameError('El nombre del torneo es obligatorio');
      return;
    }

    if (!teams.trim()) {
      setTeamsError('La cantidad de equipos es obligatoria');
      return;
    }

    if (Number(teams) > 35) {
      setTeamsError('Máximo 35 equipos');
      return;
    }

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

      <TouchableOpacity
       onPress={() => router.push('/tournaments')}
       style={{
       position: 'absolute',
       top: 60,
       right: 24,
       zIndex: 10,
       backgroundColor: '#1E293B',
       paddingHorizontal: 16,
       paddingVertical: 10,
       borderRadius: 14,
  }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
          }}
        >
          ← Volver
        </Text>
      </TouchableOpacity>

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
          onChangeText={(text) => {
            setName(text);

            if (text.trim()) {
              setNameError('');
            }
          }}
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

        {nameError ? (
          <Text
            style={{
              color: '#EF4444',
              marginTop: 8,
              fontSize: 14,
            }}
          >
            {nameError}
          </Text>
        ) : null}

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
          onChangeText={(text) => {

            if (/[^0-9]/.test(text)) {
              setTeamsError('Solo se permiten números');
            } else {
              setTeamsError('');
            }

            setTeams(text);
          }}
          keyboardType="numeric"
          placeholder="Máximo 35 equipos"
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

        {teamsError ? (
          <Text
            style={{
              color: '#EF4444',
              marginTop: 8,
              fontSize: 14,
            }}
          >
            {teamsError}
          </Text>
        ) : null}

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