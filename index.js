/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WebViewExample from './src/Screens/WebViewExample';
import SwitchExample from './src/Screens/SwitchExample';
import FlatListExample from './src/Screens/FlatListExample';

AppRegistry.registerComponent(appName, () => WebViewExample);
