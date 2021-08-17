import { Alert, Platform } from 'react-native'

import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions'

const PHOTO_LIBRARY = Platform.OS == "android" ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE : PERMISSIONS.IOS.PHOTO_LIBRARY

const usePhotoPermission = () => {
    const checkPermission = (callback) => {
        check(PHOTO_LIBRARY).then(response => {
            if (response == RESULTS.DENIED) {
                requestPermission(callback)
            } else if (response != RESULTS.GRANTED && response != RESULTS.LIMITED) {
                Alert.alert("IZIN VERMELISINIZ", "Fotograf secebilmek icin izin vermelisiniz", [
                    {
                        text: "Iptal",
                        style: "cancel"
                    },
                    { text: "Izin Ver", onPress: async () => await openSettings() }
                ])
            } else {
                callback && callback()
            }
        })
    }

    const requestPermission = (callback) => {
        request(PHOTO_LIBRARY).then(response => {
            if (response == RESULTS.GRANTED || response == RESULTS.LIMITED) {
                callback && callback()
            }
        })
    }

    return [checkPermission]
}

export default usePhotoPermission