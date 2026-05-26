import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

import { useTeamStore } from '../../store/teamStore';

export default function TeamsScreen() {

  const { teams } = useTeamStore();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
      }}
      contentContainerStyle={{
        padding: 20,
        paddingTop: 60,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: '700',
          }}
        >
          Equipos
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/team/create')}
          style={{
            backgroundColor: '#2563EB',
            paddingHorizontal: 18,
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
            Crear
          </Text>
        </TouchableOpacity>
      </View>

      {teams.map((team) => (
        <TouchableOpacity
          key={team.id}
          activeOpacity={0.8}
          onPress={() => router.push(`/team/${team.id}`)}
          style={{
            backgroundColor: '#1E293B',
            padding: 20,
            borderRadius: 20,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 8,
            }}
          >
            {team.name}
          </Text>

          <Text
            style={{
              color: '#94A3B8',
              fontSize: 15,
            }}
          >
            {team.players} jugadores
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}