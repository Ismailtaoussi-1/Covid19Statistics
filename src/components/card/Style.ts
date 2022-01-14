import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

let Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
      subContainer:{
        justifyContent:'space-between',
        flexDirection: 'row',
        marginBottom: 4,
      },
      label:{
        fontSize: 10
      },
      value:{
        fontSize: 10,
        fontWeight: 'bold',
      },
      countryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.black,
      },
      endBrick: {
        fontSize: 12,
        marginBottom: 15,
        color: Colors.background,
        // fontFamily: 'RobotoSlab-Regular',
      },
      svg: {
        height: '40%',
        width: '140',
        margin: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: -1,
        borderRadius: 20,
      },
      tcontainer: {flex: 1},
      bcontainer: {justifyContent: 'flex-start', margin: 2, marginBottom: 20},
      logo: {
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      },
      brick: {
        width: 140,
        height: 200,
        margin: 2,
        borderRadius: 15,
        padding: 10,
      },
  });
  


export default Styles;