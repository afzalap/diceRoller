import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  UseState,
} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceOne);

  const rollTapped = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceFour);
        break;
    }

    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    switch (randomNum2) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;
      default:
        setUri2(DiceFour);
        break;
    }
  };
  
  return (
    <>
      <View style={styles.container}>
          <Image style={styles.image} source={uri} />
          <Image style={styles.image} source={uri2} />
        <TouchableOpacity onPress={rollTapped}>
          <Text style={styles.rollButton}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  image: {
    width: 200,
    height: 200,
  },
  rollButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default App;
