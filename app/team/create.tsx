import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

import { router } from 'expo-router';

import { useTeamStore } from '../../store/teamStore';

export default function CreateTeamScreen() {
  const { addTeam, teams } = useTeamStore();

  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');

  const [nameError, setNameError] = useState('');
  const [playersError, setPlayersError] = useState('');

  const handleCreateTeam = () => {
    setNameError('');
    setPlayersError('');

    if (!name.trim()) {
      setNameError('El nombre del equipo es obligatorio');
      return;
    }

    if (!players.trim()) {
      setPlayersError('La cantidad de jugadores es obligatoria');
      return;
    }

    if (Number(players) > 35) {
      setPlayersError('Máximo 35 jugadores');
      return;
    }

    addTeam({
      id: teams.length + 1,
      name,
      players: Number(players),
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
        onPress={() => router.push('/teams')}
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
        Crear Equipo
      </Text>

      <Text
        style={{
          color: '#94A3B8',
          marginBottom: 40,
          fontSize: 16,
        }}
      >
        Agrega un nuevo equipo
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
          Nombre del equipo
        </Text>

        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);

            if (text.trim()) {
              setNameError('');
            }
          }}
          placeholder="Ej: Titanes FC"
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
          Cantidad jugadores
        </Text>

        <TextInput
          value={players}
          onChangeText={(text) => {
            if (/[^0-9]/.test(text)) {
              setPlayersError('Solo se permiten números');
            } else {
              setPlayersError('');
            }

            setPlayers(text);
          }}
          keyboardType="numeric"
          placeholder="Máximo 35 jugadores"
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

        {playersError ? (
          <Text
            style={{
              color: '#EF4444',
              marginTop: 8,
              fontSize: 14,
            }}
          >
            {playersError}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleCreateTeam}
        style={{
          backgroundColor: '#2563EB',
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
          Guardar Equipo
        </Text>
      </TouchableOpacity>
    </View>
  );
}