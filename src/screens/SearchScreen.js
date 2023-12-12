import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = ({}) =>{
    const [term,setTerm] = useState('')
    const [searchApi,results,erro] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return <>
        <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
        />
        {erro ? <Text> {erro} </Text> : null}
        
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
            <ResultsList 
                results={filterResultsByPrice('$$$$')} 
                title="Bankrupt Spender" 
            />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({

})
export default SearchScreen