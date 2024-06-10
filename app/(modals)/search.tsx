import { alphabet, merchants } from "@/assets/data/categories";

import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";

import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

interface Merchant {
  id: string | number;
  name: string;
  selected?: boolean;
}

const Search = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [data, setData] = useState(merchants);
  const [searchText, setSearchText] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const filterNames = (letter: string) => {
    setSelectedLetter(letter);
    if (letter === "#") {
      // Reset filter when '#' is pressed
      setData(merchants);
      return;
    }

    const filteredItems = merchants.filter(
      (item: Merchant) => item.name[0].toLowerCase() === letter
    );
    setData(filteredItems);
  };

  const renderItem: ListRenderItem<Merchant> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
  const searchFunction = (text: string) => {
    setSearchText(text);
    text = text.toLowerCase();
    if (text === "") {
      setData(merchants);
    } else {
      const filteredMerchants = merchants.filter((merchant) =>
        merchant.name.toLowerCase().includes(text)
      );
      setData(filteredMerchants);
    }
  };
  const SideBar = () => {
    return (
      <View style={styles.sidebar}>
        <ScrollView>
          {alphabet.map((letter) => (
            <TouchableOpacity
              key={letter}
              onPress={() => filterNames(letter)}
              style={styles.letter}>
              <Text
                style={[
                  styles.letterText,
                  selectedLetter === letter && styles.selectedLetterText,
                ]}>
                {letter.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={24} color="#94A3B8" />
        <TextInput
          style={{
            fontFamily: "mon-sb",
            color: "#94A3B8",
            fontSize: 16,
            flex: 1,
          }}
          placeholderTextColor="#64748B"
          placeholder="Search"
          value={searchText}
          onChangeText={(text) => searchFunction(text)}
        />
      </View>
      <View style={{ marginTop: 25, height: "100%" }}>
        <FlatList
          data={data}
          extraData={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ marginBottom: 80 }}
        />
        <SideBar />
      </View>
      <View style={{ height: 76 }} />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.fullButton}
            onPress={() => {
              navigation.canGoBack() ? navigation.goBack() : router.push("/");
            }}>
            <Text style={styles.footerText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,

    backgroundColor: "#fff",

    // marginBottom: 80,
  },
  letterText: {
    fontSize: 11,

    color: "#94A3B8",
  },
  selectedLetterText: {
    fontSize: 11,

    color: "#1868DF",
  },
  sidebar: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    paddingVertical: 5, // You can adjust this
  },
  searchBarContainer: {
    borderRadius: 8,
    backgroundColor: "#E2E8F0",
    flexDirection: "row",
    gap: 10,

    alignItems: "center",
    minWidth: "100%",

    paddingVertical: 15,
    paddingHorizontal: 14,
    elevation: 3,
    zIndex: 2,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    height: 56,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  outlineButton: {
    borderColor: Colors.primary,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 56,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Search;
