import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from "./src/views/navigation";
import useColorScheme from './src/hooks/useColorScheme';
import useLocalFonts from "./src/hooks/useLocalFonts";

export default function App() {

    const colorScheme = useColorScheme();
    const loadedFont = useLocalFonts();

    if (!loadedFont)
        return null;

    return (

        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </SafeAreaProvider>
    );

}
