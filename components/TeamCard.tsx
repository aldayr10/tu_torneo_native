import { TouchableOpacity, View, Text } from 'react-native';
import { router } from 'expo-router';
import { Team } from '@/store/teamStore';

interface Props {
  team: Team;
}

export default function TeamCard({
  team,
}: Props) {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push(`/team/${team.id}`)
      }
    >
      <View
        style={{
          backgroundColor: '#fff',
          padding: 16,
          borderRadius: 12,
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {team.name}
        </Text>

        <Text>
          Jugadores: {team.players}
        </Text>
      </View>
    </TouchableOpacity>
  );
}