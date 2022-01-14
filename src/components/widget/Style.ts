import {StyleSheet,Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';



const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

let Styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        marginBottom: 200
      },
    leftSide: {
        width:  deviceWidth * 0.65,
        height: 0,
        borderTopWidth: 150,
        borderTopColor: "#7CEECE",
        borderLeftColor: "transparent",
        borderRightWidth: 20,
        borderRightColor: "transparent",
        borderStyle: "solid",
        borderRadius:15,
        position: 'absolute',
        left: -170,
        zIndex:1

    },
    rightSide :{
        width:  deviceWidth * 0.4,
        height: 0,
        borderBottomWidth: 120,
        borderBottomColor: "#fff",
        borderLeftColor: "transparent",
        borderLeftWidth: 20,
        borderRightColor: "transparent",
        borderStyle: "solid",
        borderRadius:15,
        position: 'absolute',
        top: 18,
        right: -170

    },
    title : {
        fontSize: 25,
        color:'#fff',
        fontWeight : '700',
        position: 'absolute',
        top: -105,
        left: 30
    },
    seemore: {
        fontSize: 12,
        // fontFamily: 'RobotoSlab-Regular',
        color: Colors.lighter,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 20,
        position: 'absolute',
        top: 30,
        left: 60,
        width:70
      },
    
  });
  


export default Styles;