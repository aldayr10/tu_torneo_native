import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

export default function TournamentDetailsScreen() {
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
      <TouchableOpacity
        onPress={() => router.back()}
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

      <View
        style={{
          height: 220,
          backgroundColor: '#7C3AED',
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
          Detalle del Torneo
        </Text>

        <Text
          style={{
            color: '#E9D5FF',
            fontSize: 16,
          }}
        >
          Información general del torneo
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
              Equipos
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '700',
              }}
            >
              0
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
              Partidos
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '700',
              }}
            >
              0
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
              Estado
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
              }}
            >
              Nuevo
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
          Equipos participantes
        </Text>

        <View
          style={{
            backgroundColor: '#1E293B',
            padding: 18,
            borderRadius: 18,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: '#94A3B8',
              textAlign: 'center',
            }}
          >
            No hay equipos registrados
          </Text>
        </View>

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '700',
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
          }}
        >
          <Text
            style={{
              color: '#94A3B8',
              textAlign: 'center',
            }}
          >
            No hay posiciones disponibles
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}