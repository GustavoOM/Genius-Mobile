import React, { useState } from "react";
import { Alert } from "react-native";
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

var sequence = "";
var userSequence = "";

export default function Home() {
  const [popRedButton, setPopRedButton] = useState(false);
  const [popGreenButton, setPopGreenButton] = useState(false);
  const [popBlueButton, setPopBlueButton] = useState(false);
  const [popYellowButton, setPopYellowButton] = useState(false);

  const [playButtonClick, setPlayButtonClick] = useState(false);

  const [points, setPoints] = useState(0);
  const [block, setBlock] = useState(false);
  const [score, setScore] = useState(0);

  function startGame() {
    setPlayButtonClick(true);
    setup();
    add2Sequence();
  }

  function setup() {
    sequence = "";
    userSequence = "";
    setPoints(0);
  }

  function endGame() {
    setPlayButtonClick(false);
    Alert.alert("Fim de jogo", `Sua pontuação foi ${points}`);
    updateScore();
    setup();
  }

  function updateScore() {
    if (points > score) setScore(points);
  }

  function add2Sequence() {
    sequence += Math.round(Math.random() * (4 - 1) + 1).toString();
    showSequence();
  }

  async function showSequence() {
    setBlock(true);
    for (var index = 0; index < sequence.length; index++) {
      await sleep(500);
      showColor(sequence[index]);
    }
    setBlock(false);
  }

  async function showColor(color) {
    const soundObject = new Audio.Sound();

    switch (color) {
      case "1": //Green
        console.log("GREEN");
        setPopGreenButton(true);
        try {
          await soundObject.loadAsync(
            require("../../../assets/sounds/GREEN.mp3")
          );
          await soundObject
            .playAsync()
            .then(async (playbackStatus) => {
              setTimeout(() => {
                soundObject.unloadAsync();
              }, playbackStatus.playableDurationMillis);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
        setPopGreenButton(false);
        break;
      case "2": //Red
        console.log("RED");
        setPopRedButton(true);
        try {
          await soundObject.loadAsync(
            require("../../../assets/sounds/RED.mp3")
          );
          await soundObject
            .playAsync()
            .then(async (playbackStatus) => {
              setTimeout(() => {
                soundObject.unloadAsync();
              }, playbackStatus.playableDurationMillis);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
        setPopRedButton(false);
        break;
      case "3": //Yellow
        console.log("YELLOW");
        setPopYellowButton(true);
        try {
          await soundObject.loadAsync(
            require("../../../assets/sounds/YELLOW.mp3")
          );
          await soundObject
            .playAsync()
            .then(async (playbackStatus) => {
              setTimeout(() => {
                soundObject.unloadAsync();
              }, playbackStatus.playableDurationMillis);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
        setPopYellowButton(false);
        break;
      case "4": //Blue
        console.log("BLUE");
        setPopBlueButton(true);
        try {
          await soundObject.loadAsync(
            require("../../../assets/sounds/BLUE.mp3")
          );
          await soundObject
            .playAsync()
            .then(async (playbackStatus) => {
              setTimeout(() => {
                soundObject.unloadAsync();
              }, playbackStatus.playableDurationMillis);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
        setPopBlueButton(false);
        break;
      default:
        console.log("SKIP");
        break;
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function addUserSequence(color) {
    showColor(color);
    userSequence += color;
    verifyUserSequence();
  }

  function verifyUserSequence() {
    for (var i = 0; i < userSequence.length; i++) {
      if (userSequence[i] !== sequence[i]) {
        endGame();
        return;
      }
    }

    if (sequence === userSequence) {
      setPoints(points + 1);
      userSequence = "";
      add2Sequence();
    } else {
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
              onPress={() => (block ? null : addUserSequence("1"))}
            />
            <ButtonRed
              popButton={popRedButton}
              onPress={() => (block ? null : addUserSequence("2"))}
            />
          </RowButton>
          <RowButton>
            <ButtonYellow
              popButton={popYellowButton}
              onPress={() => (block ? null : addUserSequence("3"))}
            />
            <ButtonBlue
              popButton={popBlueButton}
              onPress={() => (block ? null : addUserSequence("4"))}
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
