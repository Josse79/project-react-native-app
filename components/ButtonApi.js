import React, { useState, useEffect } from 'react' 
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native'

// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: "tomato"
//     }
// })

const ButtonApi = () => {
    const [quote, setQuote] = useState({})

    const generateQuote = () => {
        // fetch('https://api.quotable.io/random')
        fetch('https://foodish-api.herokuapp.com/api/')
        .then(response => response.json())
        .then(data => setQuote(data))
    }

    const APIButton = styled.TouchableOpacity`
        font-weight: 700;
        width: 50%;
        background-color: tomato;
    `

    useEffect(() => {
        generateQuote();
    }, []);
    
    console.log(quote.image)

    return (
        <View>
            <Image
            style={{width: 100, height: 100}}
            source={{ uri: quote.image }}
            />
            {/* <Text>{quote.content}</Text>
            <Text>{quote.author}</Text> */}
            <APIButton
            // style={styles.button}
            onPress={generateQuote}
            >
            <Text>Find out your lunch for today!</Text>
            </APIButton>
        </View>
    )
}

export default ButtonApi
