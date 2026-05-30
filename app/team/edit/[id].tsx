import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  useLocalSearchParams,
  router,
} from 'expo-router';

import { useState } from 'react';

import { useTeamStore } from '@/store/teamStore';

export default function EditTeam() {
  const { id } = useLocalSearchParams();

  const team = useTeamStore((state) =>
    state.teams.find(
      (team) =>
        team.id === Number(id)
    )
  );

  const updateTeam = useTeamStore(
    (state) => state.updateTeam
  );

  const [name, setName] = useState(
    team?.name ?? ''
  );

  const [players, setPlayers] =
    useState(
      team?.players.toString() ?? '0'
    );

  const handleSave = () => {
    updateTeam(Number(id), {
      name,
      players: Number(players),
    });

    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Editar Equipo
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nombre"
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />

      <TextInput
        value={players}
        onChangeText={setPlayers}
        keyboardType="numeric"
        placeholder="Jugadores"
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={handleSave}
        style={{
          backgroundColor: '#2563eb',
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Guardar
        </Text>
      </TouchableOpacity>
    </View>
  );
}