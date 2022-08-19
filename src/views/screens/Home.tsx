import { View, Text, Button } from 'react-native';
import Post from "../components/Post/Post";

export default function HomeScreen ({ navigation } : any)  {
    return (
        <View>
           <Post />
        </View>
    );
};
