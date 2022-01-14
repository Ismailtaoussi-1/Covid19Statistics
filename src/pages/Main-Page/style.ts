import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

let Styles = StyleSheet.create({
    Mainimg: {
        width: 300,
        height: 190
    },
    ContainerImg:{
        // flex : 1,
        justifyContent:'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#1A1919',
        borderRadius: 100,
        padding: 15,
      },
      topContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        marginTop: 20,
      },
      bottomContainer: {
        flex: 1,
      },
      subContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // alignContent: 'center',
        // alignItems: 'center',
      },
      icons: {marginTop: 15, marginLeft: 25},
      subtitle: {
        fontSize: 16,
        // fontFamily: 'RobotoSlab-Regular',
        color: Colors.lighter,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 20,
      },
      seemore: {
        fontSize: 12,
        // fontFamily: 'RobotoSlab-Regular',
        color: Colors.lighter,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 20,
      },
      infoText: {
        fontSize: 14,
        color: Colors.lighter,
        marginLeft: 10,
      },
      vLine: {
        width: 1,
        height: 25,
        backgroundColor: Colors.lighter,
        marginHorizontal: 20,
      },
      infoCard: {
        backgroundColor: Colors.darker,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 5,
      },
      infoContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        maxWidth: '40%',
      },
      btnImg: {
        width: 40,
        height: 40,
      },
      moreImg: {
        width: 17,
        height: 17,
      },
      moreBtn: {
        paddingHorizontal: 5,
        justifyContent: 'space-around',
        paddingRight: 15,
      },
  });
  


export default Styles;