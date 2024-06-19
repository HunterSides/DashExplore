import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  inputField: {
    height: 55,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 14,
    padding: 10,
    backgroundColor: "#334155",
    fontSize: 10,
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15.24,
    letterSpacing: 1,
    fontFamily: "mon-sb",
  },
  btnIcon: {
    position: "absolute",
    color: "#fff",
  },
  footer: {
    position: "absolute",
    height: 120,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
