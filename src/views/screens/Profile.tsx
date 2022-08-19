import { View, Text } from 'react-native';

export default function ProfileScreen ({ navigation, route } : any)  {
    return (
         <Text>This is {route.params.name}'s profile</Text>
    );
};
