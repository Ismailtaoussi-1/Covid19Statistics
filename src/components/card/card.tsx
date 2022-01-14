import React from 'react';
import { Button, Text, View,TouchableOpacity } from 'react-native';
import Styles from './Style' ;
import FastImage from 'react-native-fast-image';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../utils/colors';



export type Props = {
  countryName : string,
  totalCases : Number ,
  TotalDeaths: Number ,
  CountryCode : string,
  key: string,
};

const Card: React.FC<Props> = ( {countryName,totalCases,CountryCode,TotalDeaths} ) => {
  
  return (
    <TouchableOpacity style={[
        Styles.brick,
        {
          backgroundColor:  '#7CEECE',
        },
      ]}>
      <View style={Styles.container}>
        <View style={Styles.tcontainer}>
          <View style={Styles.logo}>
            <Text>{CountryCode}</Text>
          </View>
        </View>
        <View style={Styles.bcontainer}>
            <Text  style={Styles.countryName}>
                {countryName}
            </Text>
            <View style={Styles.subContainer}>
                <Text  style={Styles.label}>Total Cases : </Text>
                <Text style={Styles.value}> {totalCases}</Text>
            </View>
            <View style={Styles.subContainer}>
                <Text  style={Styles.label}>Total Deaths : </Text>
                <Text style={Styles.value}> {TotalDeaths}</Text>
            </View>   
        </View>
      </View>
      <Svg viewBox="0 0 400 150" preserveAspectRatio="none" style={Styles.svg}>
        <Path
          d="M0 49.98c149.99 100.02 349.2-99.96 500 0V150H0z"
          fill={Colors.wave}
          opacity="0.5"
        />
      </Svg>
    </TouchableOpacity>
  );
};


export default Card;