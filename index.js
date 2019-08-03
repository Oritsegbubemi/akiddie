import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';


YellowBox.ignoreWarnings(['Cannot update during an existing state transition']);
YellowBox.ignoreWarnings(['ListView is deprecated']);
YellowBox.ignoreWarnings(['BackAndroid is deprecated']);

AppRegistry.registerComponent(appName, () => App);
