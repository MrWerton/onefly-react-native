import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './src/modules/home/pages/HomePage';
import { DetailsPage } from './src/modules/home/pages/DetailsPage';



export type StackNavigationProps = {
  home: undefined;
  details: undefined;
};

export type Path = keyof StackNavigationProps


const Stack = createNativeStackNavigator<StackNavigationProps>();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomePage} />
        <Stack.Screen name='details' component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}


