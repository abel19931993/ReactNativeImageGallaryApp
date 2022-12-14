import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import db from "../db/firestore";
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
// import { collection, getDocs } from "firebase/firestore";
import { firebase } from "../config/config";

const Home = (props) => {
  const [images, setImages] = useState([]);
  const todoRef = firebase.firestore().collection("task");
  useEffect(async () => {
    todoRef.onSnapshot((querySnapshot) => {
      const images = [];
      querySnapshot.forEach((doc) => {
        const { url } = doc.data();
        users.push({
          id: doc.id,
          url,
        });
      });
      setImages(images);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              props.navigation.navigate("showImage", { url: image.url })
            }
          >
            <Image source={image.url} style={styles.imageContainer} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    height: deviceHeight / 3,
    width: deviceWidth / 3 - 6,
    borderRadius: 10,
    margin: 2,
  },
});
