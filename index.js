/**
 * @format
 */

import {AppRegistry} from 'react-native';
 import {name as appName} from './app.json';
 import AppNavigator from './screens/Home';
import Firstpage from './screens/mainappscreens/Firstpage';
AppRegistry.registerComponent(appName, () => Firstpage);
