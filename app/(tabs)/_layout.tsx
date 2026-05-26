import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1E293B',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
        }}
        
      />
      <Tabs.Screen
        name="teams"
        options={{
          title: 'Equipos',
        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: 'Torneos',
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Partidos',
        }}
      />
    </Tabs>
  );
}