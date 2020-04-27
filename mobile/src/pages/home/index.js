import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { Audio } from "expo-av";

import {
  Container,
  ButtonYellow,
  ButtonGreen,
  ButtonBlue,
  ButtonRed,
  ColumnButton,
  ContainerButtons,
  ContainerDescAndInfo,
  ContainerInfo,
  RowButton,
  PlayButton,
  TextDesc,
  TextPoints,
  TextTitle,
} from "./styles";

export default function Home() {
  const [popRedButton, setPopRedButton] = useState(false);
  const [popGreenButton, setPopGreenButton] = useState(false);
  const [popBlueButton, setPopBlueButton] = useState(false);
  const [popYellowButton, setPopYellowButton] = useState(false);

  const [playButtonClick, setPlayButtonClick] = useState(false);

  const soundObject = new Audio.Sound();

  const [sequence, setSequence] = useState('');
  const [points, setPoints] = useState(0);
  const [userSequence, setUserSequence] = useState('');
  const [block, setBlock] = useState(false);
  const [score, setScore] = useState(0);

  function startGame() {
    setup();
    add2Sequence();
  }

  function setup() {
    setSequence('');
    setUserSequence('');
    setPoints(0);

    setPlayButtonClick(!playButtonClick);
  }

  function endGame() {
    updateScore();
    setup();
  }

  function updateScore() {
    if (points > score) score = points;
  }


  function add2Sequence() {
    var random = Math.round(Math.random() * (4 - 1) + 1);
    setSequence(sequence + random);
    showSequence();
  }

  function showSequence() {
    setBlock(true)
    console.log(sequence);
    
    for (var i = 0; i < sequence.length; i++) {
      switch (sequence[i]) {
        case "1": //Green
          console.log('GREEN');

          try {
            await soundObject.loadAsync(require('../../assets/sounds/GREEN.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
          break;
        case "2": //Red
          console.log('RED');
                  
          try {
            await soundObject.loadAsync(require('../../assets/sounds/RED.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
          break;
        case "3": //Yellow
          console.log('YELLOW');

          try {
            await soundObject.loadAsync(require('../../assets/sounds/YELLOW.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
          break;
        case "4": //Blue
          console.log('BLUE');

          try {
            await soundObject.loadAsync(require('../../assets/sounds/BLUE.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
          break;
        default:
          console.log('SKIP')
          break;
      }
    }
    setBlock(false) 
    console.log('\n')
    return
  }

  function addUserSequence(color) {
    console.log(sequence);
    console.log(userSequence);
    console.log("\n");

    if(!block){
      setUserSequence(userSequence + color);
      verifyUserSequence();
    }
    
  }

  function verifyUserSequence() {
    for (var i = 0; i < userSequence.length; i++) {
      if (userSequence[i] !== sequence[i]) {
        endGame();
        return;
      }
    }

    
    

    
    if (sequence.length === userSequence.lenght) {
      setPoints(points + 1);
      setUserSequence('');
      add2Sequence();
    }
  }

  return (
    <Container>
      <TextTitle>ESPERTUS</TextTitle>
      <ContainerButtons>
        <ColumnButton>
          <RowButton>
            <ButtonGreen
              popButton={popGreenButton}
              onPress={() => addUserSequence(1)}
            />
            <ButtonRed
              popButton={popRedButton}
              onPress={() => addUserSequence(2)}
            />
          </RowButton>
          <RowButton>
            <ButtonYellow
              popButton={popYellowButton}
              onPress={() => addUserSequence(3)}
            />
            <ButtonBlue
              popButton={popBlueButton}
              onPress={() => addUserSequence(4)}
            />
          </RowButton>
        </ColumnButton>
        <PlayButton
          //onPress={() => (playButtonClick === false ? startGame() : endGame())}
          onPress={() => startGame()}
        >
          {playButtonClick === false ? (
            <AntDesign name="play" size={100} color="#999" />
          ) : (
            <Ionicons name="md-refresh-circle" size={123} color="#999" />
          )}
        </PlayButton>
      </ContainerButtons>
      <ContainerInfo>
        <ContainerDescAndInfo>
          <TextDesc>PONTOS</TextDesc>
          <TextPoints>{points < 10 ? `0${points}` : points}</TextPoints>
        </ContainerDescAndInfo>
        <ContainerDescAndInfo>
          <TextDesc>RECORDE</TextDesc>
          <TextPoints>{score < 10 ? `0${score}` : score}</TextPoints>
        </ContainerDescAndInfo>
      </ContainerInfo>
    </Container>
  );
}
