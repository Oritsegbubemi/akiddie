import { ToastAndroid } from 'react-native';

const Sound = require('react-native-sound');

Sound.setCategory('Playback');

const SoundPlay = () => {
    const whoosh = new Sound('greater.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //console.log('failed to load the sound', error);
            ToastAndroid.show(`failed to load the sound ${error}`, ToastAndroid.SHORT);
            return;
        }
        /*console.log(`duration in seconds: 
        ${whoosh.getDuration()}
        number of channels: 
        ${whoosh.getNumberOfChannels()}`
        );*/
        ToastAndroid.show(`duration in seconds:
        ${whoosh.getDuration()}
        number of channels: 
        ${whoosh.getNumberOfChannels()}`
        , ToastAndroid.SHORT);
    });
    whoosh.play((success) => {
        if (success) {
            //console.log('successfully finished playing');
            ToastAndroid.show('successfully finished playing', ToastAndroid.SHORT);
        } else {
            //console.log('playback failed due to audio decoding errors');
            ToastAndroid.show('playback failed due to audio decoding errors', ToastAndroid.SHORT);
        whoosh.reset();
        }
    });
    whoosh.setVolume(0.5);
    whoosh.setPan(1);
    whoosh.setNumberOfLoops(-1);
    //console.log(`volume: ${whoosh.getVolume()}`);
    ToastAndroid.show(`volume: ${whoosh.getVolume()}`, ToastAndroid.SHORT);
    //console.log(`pan: ${whoosh.getPan()}`);
    ToastAndroid.show(`pan: ${whoosh.getPan()}`, ToastAndroid.SHORT);
    //console.log(`loops: ${whoosh.getNumberOfLoops()}`);
    ToastAndroid.show(`loops: ${whoosh.getNumberOfLoops()}`, ToastAndroid.SHORT);
    whoosh.setCurrentTime(2.5);
    //whoosh.getCurrentTime((seconds) => console.log(`at ${seconds}`));
    whoosh.getCurrentTime((seconds) => ToastAndroid.show(`at ${seconds}`, ToastAndroid.SHORT));
    whoosh.pause();
    whoosh.stop(() => {
        whoosh.play();
    });
    whoosh.release();
};

export { SoundPlay };
