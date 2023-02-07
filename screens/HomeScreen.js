import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";


const bgImage = require("../assets/bg.jpg");
const appIcon = require("../assets/h3.png");


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
}
   
  render() {
   
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
           
          

          <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
             
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate("Jan")}
              >
                <Text style={styles.scanbuttonText}>Jan</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>Feb</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>March</Text>
              </TouchableOpacity>
              </View>
           
            </View>
           
            <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
             
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>April</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>May</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>June</Text>
              </TouchableOpacity>
              </View>
           
            </View>
            
            <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
             
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>July</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() =>this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>Aug</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>Sep</Text>
              </TouchableOpacity>
              </View>
           
            </View>

            <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
             
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>Oct</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>Nov</Text>
              </TouchableOpacity>
              </View> 
              <View style={styles.textinputContainer}>
              <TouchableOpacity
                style={styles.scanbutton}
                onPress={() => this.props.navigation.navigate('Jan')}
              >
                <Text style={styles.scanbuttonText}>Dec</Text>
              </TouchableOpacity>
              </View>
           
            </View>

            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  upperContainer: {
    flex:1,
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    alignItems:"center",
    marginBottom:100,
  },
  appIcon: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  
  },
  
  lowerContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection:"row",
  },
  textinputContainer: {
    flex:0.8,
    borderWidth: 2,
    borderRadius: 10,
    alignItems:"center",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  },
  
});
