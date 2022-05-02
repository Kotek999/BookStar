import * as React from 'react';
import RightArrowIconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import routes from '../../routing/routes';



const LalkaBook = () => {

    const navigation = useNavigation();

    return ( 
        <RightArrowIconMaterialIcons
                name="arrow-forward-ios"
                size={24}
                color="lightgreen"
                onPress={() => navigation.navigate(routes.Lalka)}
            />
    );
};

export default LalkaBook;