
import { useFonts } from 'expo-font';


export default function useLocalFonts () {
    const [loaded] = useFonts({
        IngridDarling: require('../../assets/fonts/IngridDarling-Regular.ttf'),
        IslandMoments: require('../../assets/fonts/IslandMoments-Regular.ttf'),
    });

    return loaded;
}