import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/views/navigation";
import useColorScheme from './src/hooks/useColorScheme';

export default function App() {

    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </SafeAreaProvider>
    );

}
