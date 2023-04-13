import AsyncStorage from '@react-native-async-storage/async-storage';

class SharedPreferences {
    static instance = null;

    static getInstance() {
        if (!SharedPreferences.instance) {
            SharedPreferences.instance = new SharedPreferences();
        }
        return SharedPreferences.instance;
    }

    async setValue(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }

    async getValue(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) {
            console.log(error);
        }
    }

    async removeValue(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }
}

export default SharedPreferences.getInstance();