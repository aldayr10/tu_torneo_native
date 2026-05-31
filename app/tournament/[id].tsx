import {
  View,
  Text,
  ScrollView,
} from 'react-native';

export default function TournamentDetailsScreen() {

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
          Torneo principal
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

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 14,
          }}
        >
          <Text style={{ color: 'white' }}>
            Los Guerreros
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 14,
          }}
        >
          <Text style={{ color: 'white' }}>
            Titanes FC
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 14,
          }}
        >
          <Text style={{ color: 'white' }}>
            Storm United
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
          }}
        >
          <Text style={{ color: 'white' }}>
            Phoenix Club
          </Text>
        </View>

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

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'white' }}>#1</Text>
          <Text style={{ color: 'white' }}>Equipo 1</Text>
          <Text style={{ color: '#22C55E' }}>11 pts</Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'white' }}>#2</Text>
          <Text style={{ color: 'white' }}>Equipo 2</Text>
          <Text style={{ color: '#22C55E' }}>10 pts</Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'white' }}>#3</Text>
          <Text style={{ color: 'white' }}>Equipo 3</Text>
          <Text style={{ color: '#22C55E' }}>9 pts</Text>
        </View>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: 'white' }}>#4</Text>
          <Text style={{ color: 'white' }}>Equipo 4</Text>
          <Text style={{ color: '#22C55E' }}>8 pts</Text>
        </View>

      </View>

    </ScrollView>
  );
}