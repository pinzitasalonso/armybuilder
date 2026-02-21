export type RootStackParamList = {
  MainTabs: undefined;
  ArmyDetail: { armyId: string; name: string };
};

export type MainTabParamList = {
  Home: undefined;
  ArmyList: undefined;
  Settings: undefined;
};

// Merge tab params into stack for convenience
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList, MainTabParamList {}
  }
}
