import {StyleSheet,Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

let Styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    backgroundColor: "lightgrey",
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
    
      modal: {
        width: deviceWidth * 1,
        height: deviceHeight * 0.5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 1,
        borderColor: Colors.black,
        borderStyle: 'solid',
        backgroundColor: "white",
        bottom: 0,
        position:'absolute',
        shadowOffset: {width:10,height:10},
        shadowColor:Colors.black,
        paddingTop: 20
      },
      modalText: {
        fontSize: 20
      },
      
      button: {
        width: "50%",
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "limegreen"
      },
      buttonText: {
        fontWeight: "bold"
      },
      iconContainer: {
        justifyContent:'flex-end',
        flexDirection:'row',
        zIndex: 1000
      },
      icon: {
        fontSize:20,
        position:'absolute',
        top: deviceHeight * 0.5,
        padding: 15
        
      }
  });
  


export default Styles;