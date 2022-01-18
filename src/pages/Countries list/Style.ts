import {StyleSheet,Dimensions} from 'react-native';
import {Colors} from '../../utils/colors';
const deviceWidth = Dimensions.get('window').width
let Styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: Colors.card,
        justifyContent: 'center',
      },
    TopContainer:{
        flexDirection:'row',
        // flex: 1,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    container_row:{
        backgroundColor: Colors.card,

        flexDirection:'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'center',
        width:deviceWidth * 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:deviceWidth *1,
      },
      containerCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width:  deviceWidth*1,
        textAlign:'flex-start',
        alignItems:'center',
        padding: 10
      },
      button: {
        alignItems: 'center',
        backgroundColor: Colors.stats,
        borderRadius: 10,
        padding: 15,
        height:45,
        width:80,
        borderWidth: 1

      },
      input: {
        margin: 15,
        height: 45,
        width:250,
        borderColor: Colors.foreground,
        borderRadius:10,
        backgroundColor:Colors.stats,
        padding:10,
        justifyContent:'flex-start',
        borderWidth: 1
     },
     container_app : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor : Colors.stats,
    },
    logoimg: {
      width: 30,
      height: 30,
      opacity: 0.9,
      justifyContent: 'center',
      borderRadius: 30,
    },
    
    chart: {
      paddingRight: 0,
      paddingBottom: 20,
      paddingTop: 20,
    },
    mcontainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 10,
      // flex: 1.5,
    },
    chartContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 0,
      flex: 1,
    },
    
    title: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: 'bold',
      color: Colors.foreground,
    },
    change: {
      fontSize: 13,
      textAlign: 'center',
      color: Colors.foreground,
      fontWeight: 'bold',
      marginTop: 5,
    },
    logo: {
      width: 35,
      height: 35,
    //   alignSelf: 'center',
      backgroundColor: Colors.background,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
    },
    subtitle: {
      padding: 5,
      backgroundColor: Colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    rcontainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 15,
      flex: 1,
    },
    country:{
      fontSize: 10,
      fontWeight : '800',
      marginLeft: 10
    }
  });
  


export default Styles;