import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

import { useTournamentStore } from '../../store/tournamentStore';



export default function TournamentsScreen() {

  const { tournaments } = useTournamentStore();

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
          Torneos
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push('/tournament/create')
          }
          style={{
            backgroundColor: '#7C3AED',
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

      {tournaments.map((tournament) => (
        <TouchableOpacity
          key={tournament.id}
          activeOpacity={0.8}
          onPress={() =>
            router.push(`./tournament/${tournament.id}`)
          }
          style={{
            backgroundColor: '#1E293B',
            padding: 22,
            borderRadius: 22,
            marginBottom: 18,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 10,
            }}
          >
            {tournament.name}
          </Text>

          <Text
            style={{
              color: '#94A3B8',
              marginBottom: 6,
            }}
          >
            Equipos: {tournament.teams}
          </Text>

          <Text
            style={{
              color:
                tournament.status === 'En curso'
                  ? '#22C55E'
                  : tournament.status === 'Próximamente'
                    ? '#FACC15'
                    : '#EF4444',
              fontWeight: '600',
            }}
          >
            {tournament.status}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}