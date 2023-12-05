import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [text, setText] = useState("0");

  // FUNCTION
  const calculate = (title) => {
    if (title == "AC" || title == "C") {
      setText("0");
    } else if (title == "X") {
      try {
        return setText(text.slice(0, text.length - 1));
      } catch (ex) {
        console.warn("Processing....");
      }
    } else if (title == "=") {
      setText(eval(text));
    } else if (text == "0") {
      setText(title);
    } else {
      let result = text + title;
      setText(result);
    }
  };

  // BUTTON
  const Btn = ({ title }) => {
    return (
      <TouchableOpacity style={{ margin: 2 }} onPress={() => calculate(title)}>
        <View style={styles.calculatorField}>
          <Text style={styles.calculatorElement}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ paddingLeft: 30, fontSize: 50 }}>{text}</Text>
      <View style={styles.calculatorBody}>
        <Btn title="AC" />
        <Btn title="()" />
        <Btn title="C" />
        <Btn title="X" />
        <Btn title="7" />
        <Btn title="8" />
        <Btn title="9" />
        <Btn title="/" />
        <Btn title="4" />
        <Btn title="5" />
        <Btn title="6" />
        <Btn title="*" />
        <Btn title="1" />
        <Btn title="2" />
        <Btn title="3" />
        <Btn title="+" />
        <Btn title="0" />
        <Btn title="." />
        <Btn title="." />
        <Btn title="=" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    paddingTop: 10,
  },
  calculatorBody: {
    height: 450,
    width: 400,
    padding: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  calculatorField: {
    height: 80,
    width: 90,
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 20,
  },
  calculatorElement: {
    textAlign: "center",
    padding: 10,
    color: "black",
  },
});
