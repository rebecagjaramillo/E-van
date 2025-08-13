import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import BottomNavigationBar from './src/components/bottonNavigation/bottonNavigationBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const App = () => (
  <GestureHandlerRootView style={styles.container}>
    <PaperProvider>
      <NavigationContainer>
        <BottomNavigationBar />
      </NavigationContainer>
    </PaperProvider>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
