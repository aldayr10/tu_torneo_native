import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

const players = [
  'Carlos Ramírez',
  'Juan Pérez',
  'Miguel Torres',
  'Andrés López',
  'Kevin Castro',
];

export default function TeamDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
      }}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      <View
        style={{
          height: 220,
          backgroundColor: '#2563EB',
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
          Los Guerreros
        </Text>

        <Text
          style={{
            color: '#DBEAFE',
            fontSize: 16,
          }}
        >
          ID Equipo: {id}
        </Text>
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <View
            style={{
              backgroundColor: '#1E293B',
              width: '31%',
              padding: 18,
              borderRadius: 18,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#94A3B8',
                marginBottom: 8,
              }}
            >
              Jugadores
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '700',
              }}
            >
              12
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#1E293B',
              width: '31%',
              padding: 18,
              borderRadius: 18,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#94A3B8',
                marginBottom: 8,
              }}
            >
              Victorias
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '700',
              }}
            >
              8
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#1E293B',
              width: '31%',
              padding: 18,
              borderRadius: 18,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#94A3B8',
                marginBottom: 8,
              }}
            >
              Torneos
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '700',
              }}
            >
              3
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '700',
            marginBottom: 20,
          }}
        >
          Jugadores
        </Text>

        {players.map((player, index) => (
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
              {player}
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={{
            backgroundColor: '#2563EB',
            padding: 18,
            borderRadius: 18,
            marginTop: 20,
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
            Invitar Jugador
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}