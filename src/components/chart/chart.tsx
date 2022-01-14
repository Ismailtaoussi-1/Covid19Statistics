import React,{useState} from 'react';
import { Button, Text, View,TouchableOpacity,Dimensions } from 'react-native';
// import { PieChart } from 'react-native-svg-charts'
import {PieChart} from "react-native-chart-kit";
import Styles from './Style';


export type Props = {
  dataCovid: any ;
};

    

const Chart: React.FC<Props> = ( {dataCovid} ) => {
        const values: any[] = [];
        values.push(
                {
                    'name': 'Total Confirmed',
                    'population':dataCovid.TotalConfirmed,
                    'color':'#7CEECE',
                    'legendFontColor':'#353333',
                    'legendFontSize': 10
                },
                {
                    'name':"New Confirmed",
                    'population':dataCovid.NewConfirmed,
                    'color':'#83D6DE',
                    'legendFontColor':'#353333',
                    'legendFontSize': 10 
                },
                {
                    'name': 'Total Deaths',
                    'population':dataCovid.TotalDeaths,
                    'color':'#59A9C2',
                    'legendFontColor':'#353333',
                    'legendFontSize': 10
                }
        )
          const chartConfig = 
          { // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }
          
    const deviceWidth = Dimensions.get('window').width
    const deviceHeight = Dimensions.get('window').height
  return (
    <View >
    <PieChart
        data={values}
        width={deviceWidth * 1}
        height={deviceHeight * 0.24}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"-10"}
        // center={[5, 5]}
        absolute
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        />
  </View>
  );
};


export default Chart;