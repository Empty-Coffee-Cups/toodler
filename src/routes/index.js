import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// views
import Boards from '../views/Boards';
import Board from '../views/Board';

const StackNavigator = createStackNavigator(
  {
    Boards,
    Board,
  },
);

export default createAppContainer(StackNavigator);
