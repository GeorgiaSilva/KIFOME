import { useState, useEffect } from "react";
import yelp from "../api/yelp";



export default () => {
    const [results,setResults] = useState([])
    const [erro,setErro] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            
        const response = await yelp.get('/search',{
            params: {
                limit:50,
                term: searchTerm,
                location:'sao paulo'
            }
        
        })
        setResults(response.data.businesses)
        } catch(err) {
            setErro('algo deu errado')
        }
    }
    useEffect(()=> {

        searchApi('pasta')
    }, [])

    return [searchApi, results, erro]
}