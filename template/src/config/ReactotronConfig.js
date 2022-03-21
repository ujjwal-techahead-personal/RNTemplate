import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import EncryptedStorage from 'react-native-encrypted-storage';

const reactotron = Reactotron.setAsyncStorageHandler(EncryptedStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

export default reactotron;
