import React from 'react';
import { Button, Text, View,ScrollView ,ActivityIndicator} from 'react-native';
import Card from '../../components/card/card';
import Chart from '../../components/chart/chart';
import Styles from './style' ;
import FastImage from 'react-native-fast-image';
import useCases from '../../query-hooks/useCovidCases';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import TopCard from '../../components/widget/topCard';

export type Props = {
    navigation: NavigationProp<ParamListBase>
};

const MainPage: React.FC<Props> = ({navigation}) => {

    const {isSuccess,isLoading,data} = useCases();
    

  return (
    <View>
    
    {isLoading && (
        <React.Fragment>
        <ActivityIndicator size="small" color="#83D6DE"/>
        </React.Fragment>
    )}
    { isSuccess && (
    <ScrollView style={{marginTop: 20, width: '100%'}}>
            <View style={Styles.ContainerImg}>
            
            <TopCard countryList={data.Countries} navigation={navigation}/>
            </View>
            <View style={Styles.subContainer}>
              <Text style={Styles.subtitle}>Top 5 countries</Text>
              <Text style={Styles.seemore} onPress={() => navigation.navigate('Countries',{CountryList:data.Countries}) }>See more &gt;</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 10}}>
              { data.Countries.sort((a : {TotalConfirmed : number},b: {TotalConfirmed : number}) => b.TotalConfirmed - a.TotalConfirmed).slice(0,5).map((value: { ID: string; Country: string; TotalConfirmed: Number; CountryCode: string; TotalDeaths: Number; }) => {
                return <Card key={value.ID} countryName={value.Country} totalCases={value.TotalConfirmed} CountryCode={value.CountryCode} TotalDeaths={value.TotalDeaths}/>;
              })}
            </ScrollView>
            <View style={[Styles.subContainer, {marginTop: 10}]}>
              <Text style={Styles.subtitle}>Global cases statistics</Text>
            </View>
            <Chart dataCovid={data.Global}/>
          </ScrollView>
          )
        }
      </View>
  );

};


export default MainPage;