import * as React from 'react';
import RightArrowIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RightArrowIconEntypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import routes from '../../routing/routes';



const WeseleBook = () => {

    const navigation = useNavigation();

    return ( 
        <RightArrowIconEntypo
                name="paper-plane"
                size={24}
                color="violet"
                onPress={() => navigation.navigate(routes.Wesele)}
            />
    );
};

export default WeseleBook;