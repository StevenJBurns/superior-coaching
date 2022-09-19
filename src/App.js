import { StatusBar } from 'expo-status-bar';
// import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, AthleteListScreen, AthleteCreateScreen, Planning, References, AthleteDetailsScreen } from './components/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  // <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Athletes' component={AthleteListScreen} />
        <Stack.Screen name='AthleteCreate' component={AthleteCreateScreen} />
        <Stack.Screen name='AthleteDetails' component={AthleteDetailsScreen} />
        <Stack.Screen name='Planning' component={Planning} />
        <Stack.Screen name='References' component={References} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  // </NativeBaseProvider>
  );
};
