import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "./pages/HomePage";
import EditTeamPage from "./pages/EditTeamPage";
import CreateTeamPage from "./pages/CreateTeamPage";
import InsightsPage from "./pages/InsightsPage";

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={HomePage} options={{title: 'Home'}}/>
        <Tab.Screen name='EditTeam' component={EditTeamPage} options={{title: 'Edit Team'}}/>
        <Tab.Screen name={'CreateTeam'} component={CreateTeamPage} options={{title: 'Create New Team'}}/>
        <Tab.Screen name={'InsightsTeam'} component={InsightsPage} options={{title: 'Insights'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


