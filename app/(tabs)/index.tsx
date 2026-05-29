import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

export default function DashboardScreen() {
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
          marginBottom: 8,
        }}
      >
        Tu torneo
      </Text>

      <Text
        style={{
          color: '#94A3B8',
          fontSize: 16,
          marginBottom: 30,
        }}
      >
        Bienvenido a Tu Torneo
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 22,
          fontWeight: '700',
          marginBottom: 20,
        }}
      >
        Acciones rápidas
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#2563EB',
          padding: 18,
          borderRadius: 18,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          Crear Equipo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
        router.push('/tournaments')
      }
      style={{
       backgroundColor: '#7C3AED',
     padding: 18,
     borderRadius: 18,
     marginBottom: 15,
  }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          Crear Torneo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#059669',
          padding: 18,
          borderRadius: 18,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          Ver Partidos
        </Text>
      </TouchableOpacity>

      
    </ScrollView>
  );
}