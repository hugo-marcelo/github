/**
 * adb reverse tcp:9090 tcp:9090
 */

import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative(asyncStorage())
    .connect();

  console.tron = tron;

  tron.clear();
}
