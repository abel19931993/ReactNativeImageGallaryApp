import React from 'react'
import {View,ImageBackground,Dimensions} from 'react-native'
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
function ImageShow(props) {
  return (
     
      <View>
          <ImageBackground source={props.route.params.url}
          style={styles.container}/>
      </View>
     
  )
}

export default ImageShow
const styles = StyleSheet.create({
  container: {
    height:deviceHeight,
    width:deviceWidth
  },
  
});