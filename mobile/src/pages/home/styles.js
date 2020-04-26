import styled from "styled-components/native";
import { lighten } from "polished";

import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView`
  background-color: #888;
  flex: 1;

  justify-content: center;
`;

export const PlayButton = styled(RectButton)`
  position: absolute;
  width: 120px;
  height: 120px;
  background: #62625e;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
`;

export const ButtonYellow = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin: 5px;
  background: ${(props) =>
    !props.popButton ? "#ffe44c" : `${lighten(0.2, "#ffe44c")}`};
  border-bottom-left-radius: 150px;
`;

export const ButtonRed = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin: 5px;
  background: ${(props) =>
    !props.popButton ? "#fe524b" : `${lighten(0.2, "#fe524b")}`};
  border-top-right-radius: 150px;
`;

export const ButtonGreen = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin: 5px;
  background: ${(props) =>
    !props.popButton ? "#5df99e" : `${lighten(0.2, "#5df99e")}`};
  border-top-left-radius: 150px;
`;

export const ButtonBlue = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin: 5px;
  background: ${(props) =>
    !props.popButton ? "#2bd9fe" : `${lighten(0.2, "#2bd9fe")}`};
  border-bottom-right-radius: 150px;
`;

export const RowButton = styled.View`
  flex-direction: row;
`;

export const ColumnButton = styled.View`
  flex-direction: column;
  background-color: #62625e;
  border-radius: 20px;
  padding: 5px;
`;

export const ContainerButtons = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextTitle = styled.Text`
  padding: 10px 0 10px 0;
  font-weight: bold;
  font-size: 65px;

  align-items: center;
  text-align: center;

  color: rgba(250, 250, 250, 1);

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.09);
  color: rgba(250, 250, 250, 0.71);

  text-shadow: 2.19311px 4.38622px 2.19311px rgba(0, 0, 0, 0.08);
`;

export const TextPoints = styled.Text`
  padding: 10px 0 10px 0;

  font-weight: bold;
  font-size: 50px;

  align-items: center;
  text-align: center;

  color: rgba(250, 250, 250, 0.71);

  text-shadow: 2.19311px 4.38622px 2.19311px rgba(0, 0, 0, 0.08);
`;

export const TextDesc = styled.Text`
  padding: 10px 0 10px 0;

  font-weight: bold;
  font-size: 35px;

  align-items: center;
  text-align: center;

  color: rgba(250, 250, 250, 0.71);

  text-shadow: 2.19311px 4.38622px 2.19311px rgba(0, 0, 0, 0.08);
`;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 0 20px 0 20px;

  justify-content: space-between;
`;

export const ContainerDescAndInfo = styled.View`
  align-items: center;
  justify-content: center;
`;
