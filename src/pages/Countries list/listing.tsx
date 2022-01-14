import { useRoute } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { TouchableOpacity, Text, ScrollView,View,TextInput,FlatList,ActivityIndicator } from 'react-native';
import BottomModal from '../../components/modal/bottomModal';
import Styles from './Style';




export type Props = {
};

const CountryList: React.FC<Props> = ( {} ) => {
  const [search,setSearch] = useState("");
  const [itemArray,setItemArray] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false)
  const [countryObject, setCountryObject] = useState()



  useEffect(() => {
    const { CountryList } = route.params;
    setItemArray(CountryList);
    },
    [search] );

    function  filterList(List) {
      const updatedList =  List.filter(item => {
        const itemData = item.Country.toUpperCase();
        const textData = search.toUpperCase();
        return (
        itemData.indexOf(textData) > -1
        )
      });
      setItemArray(updatedList);
    };

  
    const toggleModal = React.useCallback(
      () => { setModalVisible(!isModalVisible) },
    [isModalVisible]
    )

  const Card = ({item}: any) => (
    
    <TouchableOpacity  style={{borderBottomWidth:1,borderColor:'#f6f6f6'}} onPress={() => {toggleModal();setCountryObject(item)}}>
      <View style={Styles.container_row}>
      <View style={Styles.containerCard}>
        <View style={Styles.logo}>
            <Text>{item.CountryCode}</Text>
        </View>
            <Text style={Styles.country}>{item.Country}</Text>
      </View>
      <View style={Styles.rcontainer}>
            <View style={Styles.subtitle}>
              <Text style={Styles.title}>Total Cases</Text>
            </View>
            <Text
              style={[
                Styles.change,
                {color: '#5cb85c' },
              ]}>
              {item.TotalConfirmed??item.Confirmed}
            </Text>
          </View>
      </View>
    </TouchableOpacity>
  )
  const route = useRoute();
  return (
    <View style={Styles.container}>
        <View style={Styles.TopContainer}>
            <TextInput placeholder='Search' style={Styles.input} onChangeText={val => setSearch(val)}/>  
            <TouchableOpacity style={Styles.button} onPress={() => filterList(itemArray)} >
              <Text>Search Country</Text>
            </TouchableOpacity>
        </View>
        {itemArray === null ? <ActivityIndicator size="small" color="#83D6DE"/> : 
         <View >
         <FlatList
           data={itemArray}
           renderItem={({item}) => <Card item={item}/>}
           keyExtractor={(item, index) => item.CountryCode}
         />
         </View>
        }
      <BottomModal toggled={toggleModal} isVisible={isModalVisible} data={countryObject}/>
        
    </View>
  );

};


export default CountryList;