import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image, FlatList} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";


//GEORGIA TIRE ISSO DAQUI VIU?????????????????????????????? NÃO ESQUEÇA

import { FontAwesome6 } from '@expo/vector-icons';


const SearchScreen = ({}) =>{
    const [term,setTerm] = useState('')
    const [searchApi,results,erro] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    const data = [
        { id: '1', title: 'PIZZA' },
        { id: '2', title: 'HAMBUGUER' },
        { id: '3', title: 'PEIXE' },
        { id: '4', title: 'FRANGO' },
        { id: '5', title: 'REFRI' },
      ];
      
      const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.title}</Text>
        </View>
      );

    return <>

        <Image
            source={require('../Assets/logo.png')}
            style={{ width: 321, height: 75, alignSelf: 'center', marginTop: 50, }}
        />
        
        <SearchBar
 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
        />
        {erro ? <Text> {erro} </Text> : null}


   
        <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />

      
        <ScrollView>
            
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective" 
            />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier" 
            />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender" 
            />
            
        </ScrollView>
    </>
}

const styles = StyleSheet.create({

})
export default SearchScreen

SearchScreen.navigationOptions = () => {
    return {
        headerShown:false,
    } 

}