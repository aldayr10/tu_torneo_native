import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

const teams = [
  'Los Guerreros',
  'Titanes FC',
  'Storm United',
  'Phoenix Club',
];

export default function TournamentDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
      }}
    >
      <View
        style={{
          backgroundColor: '#7C3AED',
          height: 220,
          justifyContent: 'flex-end',
          padding: 24,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 34,
            fontWeight: '700',
            marginBottom: 10,
          }}
        >
          Champions Cup
        </Text>

        <Text
          style={{
            color: '#E9D5FF',
            fontSize: 16,
          }}
        >
          ID Torneo: {id}
        </Text>
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 20,
          }}
        >
          Equipos participantes
        </Text>

        {teams.map((team, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#1E293B',
              padding: 18,
              borderRadius: 18,
              marginBottom: 14,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              {team}
            </Text>
          </View>
        ))}

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '700',
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          Tabla de posiciones
        </Text>

        {[1, 2, 3, 4].map((position) => (
          <View
            key={position}
            style={{
              backgroundColor: '#1E293B',
              padding: 18,
              borderRadius: 18,
              marginBottom: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
              }}
            >
              #{position}
            </Text>

            <Text
              style={{
                color: 'white',
              }}
            >
              Equipo {position}
            </Text>

            <Text
              style={{
                color: '#22C55E',
                fontWeight: '700',
              }}
            >
              {12 - position} pts
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}