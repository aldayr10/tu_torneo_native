import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

import TeamCard from '@/components/TeamCard';

import { useTeamStore } from '@/store/teamStore';

export default function TeamsScreen() {
  const teams = useTeamStore(
    (state) => state.teams
  );

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
        Equipos
      </Text>

      <FlatList
        data={teams}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <TeamCard team={item} />
        )}
      />

      <TouchableOpacity
        onPress={() =>
          router.push('/team/create')
        }
        style={{
          backgroundColor: '#2563eb',
          padding: 15,
          borderRadius: 12,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Crear Equipo
        </Text>
      </TouchableOpacity>
    </View>
  );
}