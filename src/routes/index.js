import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// views
import Boards from '../views/Boards';
// import Board from '../views/Board';

const StackNavigator = createStackNavigator(
  {
    Boards,
    // Board,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(StackNavigator);
