import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

<View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.row}>
      <AntDesign name="left" size={24} color="black" style={styles.iconLeft}/>
      <View style={styles.textContainer}>
        <Text style={styles.saitText}>SAIT</Text>
        <Text style={styles.collegeText}>College and University</Text>
      </View>
        <FontAwesome name="plus-square-o" size={24} color="black" />
</View>

<View style={[styles.row, styles.secondRow]} >
      <Image source={require('./assets/sait.jpg')} style={styles.image}/>
        <View style={styles.textContainer}>
        <Text style={styles.numberText}>53</Text>
        <Text>Posts</Text>
        </View >
        <View style={styles.textContainer}>
        <Text style={styles.numberText}>12</Text>
        <Text>Members</Text>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.numberText}>1</Text>
        <Text>Admins</Text>
        </View>
      </View>
      <View style={styles.thirdRow}>
        <Text>College and University</Text>
        <Text>We inspire, educate and innovate, with and for our students.</Text>        
        <Text>Tag your 📸 With #HereAtSait for a chance to be featured.</Text>
      </View>
   
   
    <View>
      <TouchableOpacity style={styles.button}
        onPress={() =>
        alert('I am clicked')}
        >
        <Text style={styles.buttonText}>Member</Text>
        <AntDesign name="down" size={20} color="black" />
        </TouchableOpacity>
    </View>
 
