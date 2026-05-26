import {
  View,
 Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const matches = [
  {
    id: 1,
    home: 'Los Guerreros',
    away: 'Titanes FC',
    date: '28 Mayo - 7:00 PM',
    status: 'En vivo',
    score: '2 - 1',
  },
  {
    id: 2,
    home: 'Storm United',
    away: 'Phoenix Club',
    date: '29 Mayo - 5:00 PM',
    status: 'Próximo',
    score: null,
  },
  {
    id: 3,
    home: 'Master FC',
    away: 'Black Eagles',
    date: '25 Mayo - 8:00 PM',
    status: 'Finalizado',
    score: '3 - 3',
  },
];

export default function MatchesScreen() {
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
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: '700',
          marginBottom: 10,
        }}
      >
        Partidos
      </Text>

      <Text
        style={{
          color: '#94A3B8',
          marginBottom: 30,
          fontSize: 16,
        }}
      >
        Resultados y próximos encuentros
      </Text>

      {matches.map((match) => (
        <TouchableOpacity
          key={match.id}
          activeOpacity={0.8}
          style={{
            backgroundColor: '#1E293B',
            borderRadius: 24,
            padding: 22,
            marginBottom: 18,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                color:
                  match.status === 'En vivo'
                    ? '#22C55E'
                    : match.status === 'Próximo'
                    ? '#FACC15'
                    : '#EF4444',
                fontWeight: '700',
              }}
            >
              {match.status}
            </Text>

            <Text
              style={{
                color: '#94A3B8',
              }}
            >
              {match.date}
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '700',
                marginBottom: 10,
              }}
            >
              {match.home}
            </Text>

            <Text
              style={{
                color: '#60A5FA',
                fontSize: 28,
                fontWeight: '800',
                marginBottom: 10,
              }}
            >
              {match.score ?? 'VS'}
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '700',
              }}
            >
              {match.away}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}