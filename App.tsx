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
