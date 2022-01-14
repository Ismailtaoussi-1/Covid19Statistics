import React from 'react';
import { Button, Text, View,Dimensions ,Modal,ActivityIndicator} from 'react-native';
import { StackedBarChart ,BarChart} from 'react-native-chart-kit';
import Chart from '../chart/chart';
import Styles from './Style' ;




export type Props = {
    toggled : any,
    isVisible : any,
    data:any
};

const BottomModal: React.FC<Props> = ( {toggled,isVisible,data} ) => {
    

    const deviceWidth = Dimensions.get('window').width

    return (
    <React.Fragment>
    {
        data ? <View style={Styles.container}>
        <Modal style={Styles.bottomModalView} visible={isVisible} onRequestClose={toggled} transparent={true} animationType='slide'>
            <View style={Styles.iconContainer}>
                <Text onPress={toggled} style={Styles.icon}>X</Text>
            </View>
                <View style={Styles.modal}>
                <Text style={Styles.modalText}>{data.Country}</Text>
                <Chart dataCovid={data}/>
            </View>
        </Modal>
       </View> : <ActivityIndicator />
    }
    </React.Fragment>
  );

};


export default BottomModal;