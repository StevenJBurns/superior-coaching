import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet } from 'react-native';
import { Home, Athletes, Planning, References } from './components/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Athletes' component={Athletes}></Stack.Screen>
        <Stack.Screen name='Planning' component={Planning}></Stack.Screen>
        <Stack.Screen name='References' component={References}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
// });
