import React from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';
import Styles from './Style' ;
import {NavigationProp, ParamListBase} from '@react-navigation/native';




export type Props = {
  countryList : any,
  navigation:any
};

const TopCard: React.FC<Props> = ( {countryList,navigation} ) => {
  
  return (
    
      <View style={Styles.container}>
        <View style={Styles.leftSide}>
            <Text style={Styles.title}>Covid 19 World wide Updates</Text>
        </View>
        <View style={Styles.rightSide}>
          <Text style={Styles.seemore} onPress={() => navigation.navigate('Countries',{CountryList:countryList}) }>See all countries &gt;</Text>
        </View>
      </View>
  );
};


export default TopCard;