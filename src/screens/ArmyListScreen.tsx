import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MainTabParamList, RootStackParamList } from '../navigation/types';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'ArmyList'>,
  NativeStackScreenProps<RootStackParamList>
>;

const SAMPLE_ARMIES = [
  { id: '1', name: 'WAAAGH! Ghazkull', points: 2000 },
  { id: '2', name: 'Speed Freeks', points: 1500 },
  { id: '3', name: 'Bad Moonz Mob', points: 1000 },
];

export default function ArmyListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={SAMPLE_ARMIES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('ArmyDetail', {
                armyId: item.id,
                name: item.name,
              })
            }
          >
            <Text style={styles.armyName}>{item.name}</Text>
            <Text style={styles.points}>{item.points} pts</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#16213e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  armyName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e0e0e0',
  },
  points: {
    fontSize: 14,
    color: '#e94560',
    fontWeight: '600',
  },
});
