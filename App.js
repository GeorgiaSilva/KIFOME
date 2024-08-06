import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ComentsScreen from './src/screens/ComentsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getExpoGoProjectConfig } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
// const navigator = createStackNavigator ({
//   Search: SearchScreen,
//   ResultsShow: ResultsShowScreen
// }, {
//   initialRouteName:'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   }
// })

// export default createAppContainer(navigator)

const Tab = createBottomTabNavigator()
function ResultTap() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Infos' component={ResultsShowScreen}/>
      <Tab.Screen name='Reviews' component={ComentsScreen} />
    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultTap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}