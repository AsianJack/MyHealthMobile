/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navigation from './screens/navigation.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navigation);
