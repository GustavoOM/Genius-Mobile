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

  // const soundObject = new Audio.Sound();

  const [sequence, setSequence] = useState([]);
  const [points, setPoints] = useState(0);
  const [userSequence, setUserSequence] = useState([]);
  const [block, setBlock] = useState(false);
  const [score, setScore] = useState(0);

  function startGame() {
    setup();
    add2Sequence();
  }

  function setup() {
    setSequence([]);
    setUserSequence([]);
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

  // try {
  //   await soundObject.loadAsync(require('./assets/sounds/hello.mp3'));
  //   await soundObject.playAsync();
  //   // Your sound is playing!
  // } catch (error) {
  //   // An error occurred!
  // }

  function add2Sequence() {
    var random = Math.round(Math.random() * (4 - 1) + 1);
    setSequence([...sequence, random]);
    console.log(sequence);
    showSequence();
  }

  function showSequence(sequence) {
    for (var i in sequence) {
      switch (i) {
        case 1: //Green
          break;
        case 2: //Red
          break;
        case 3: //Yellow
          break;
        case 4: //Blue
          break;
        default:
          break;
      }
    }
    setBlock(false);
  }

  function addUserSequence(color) {
    setUserSequence([...userSequence, color]);
    verifyUserSequence();
  }

  function verifyUserSequence() {
    for (var i = 0; i < userSequence.length; i++) {
      if (userSequence[i] !== sequence[i]) {
        endGame();
        return;
      }
    }

    setPoints(points + 1);
    setUserSequence([]);
    if (sequence.length === userSequence.lenght) {
      setBlock(true);
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
              onPress={() => (block === false ? addUserSequence(1) : null)}
            />
            <ButtonRed
              popButton={popRedButton}
              onPress={() => (block === false ? addUserSequence(2) : null)}
            />
          </RowButton>
          <RowButton>
            <ButtonYellow
              popButton={popYellowButton}
              onPress={() => (block === false ? addUserSequence(3) : null)}
            />
            <ButtonBlue
              popButton={popBlueButton}
              onPress={() => (block === false ? addUserSequence(4) : null)}
            />
          </RowButton>
        </ColumnButton>
        <PlayButton
          onPress={() => (playButtonClick === false ? startGame() : endGame())}
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
