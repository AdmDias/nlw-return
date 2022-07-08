import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Widget from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar 
        style="light"
        backgroundColor={theme.colors.background}
        translucent 
      />
      
      <Widget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
});
