import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  useLocalSearchParams,
  router,
} from 'expo-router';

import { useTeamStore } from '@/store/teamStore';

export default function TeamDetail() {
  const { id } = useLocalSearchParams();

  const team = useTeamStore((state) =>
    state.teams.find(
      (team) =>
        team.id === Number(id)
    )
  );

  const deleteTeam = useTeamStore(
    (state) => state.deleteTeam
  );

  if (!team) {
    return (
      <View>
        <Text>
          Equipo no encontrado
        </Text>
      </View>
    );
  }

  const handleDelete = () => {
    Alert.alert(
      'Eliminar equipo',
      '¿Deseas eliminar este equipo?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            deleteTeam(team.id);

            router.replace('/teams');
          },
        },
      ]
    );
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
          fontSize: 28,
          fontWeight: 'bold',
        }}
      >
        {team.name}
      </Text>

      <Text
        style={{
          marginTop: 20,
        }}
      >
        Jugadores: {team.players}
      </Text>

      <Text>
        Victorias: {team.victories}
      </Text>

      <Text>
        Torneos: {team.tournaments}
      </Text>

      <TouchableOpacity
        onPress={() =>
          router.push(
            `/team/edit/${team.id}`
          )
        }
        style={{
          backgroundColor: '#22c55e',
          padding: 15,
          borderRadius: 12,
          marginTop: 25,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Editar Equipo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDelete}
        style={{
          backgroundColor: '#ef4444',
          padding: 15,
          borderRadius: 12,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Eliminar Equipo
        </Text>
      </TouchableOpacity>
    </View>
  );
}