import {View, Text, Button, ScrollView} from 'react-native';
import Post from "../components/Post/Post";

export default function HomeScreen ({ navigation } : any)  {
    return (
        <ScrollView style={{}}>
            <Post link ={'http://192.168.100.9:19000/assets/images/126026.jpg'}/>
            <Post link ={'http://192.168.100.9:19000/assets/images/avise-bien-sage.jpg'}/>
            <Post link ={'http://192.168.100.9:19000/assets/images/Culture-boubou-tradition-style-couture-habits-vetement-large-Wax-Bazin-fete-tendance-Sagnse-visite-femme-homme-mode-elegance-evenement-LEUKSENEGAL-Dakar-Senegal-Afrique-boubou-de-mariage.jpg'}/>
        </ScrollView>
    );
};
