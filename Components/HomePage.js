/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
  Button,
  TouchableHighlight,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TextInput} from 'react-native-gesture-handler';

const ios = Platform.OS === 'ios';

const HomePage = ({navigation}) => {
  const [input, setInput] = useState('');
  const handleChange = (e) => setInput(e.target.value);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Hello World</Text>
            <Text style={styles.sectionDescription}>
              This is awesome and working :D
            </Text>
            {ios && <Text>iOS it the best</Text>}
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.nameInput}>
              <TextInput
                style={styles.textInput}
                placeholder="write here..."
                placeholderTextColor="white"
                value={input}
                onChange={handleChange}
              />
              <View style={styles.closeIcon}>
                <TouchableHighlight
                  onPress={() => setInput('')}
                  underlayColor="green">
                  <Icon name="times" style={styles.icon} size={10} />
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Button
              title="Go to Months List"
              onPress={() => navigation.push('Months')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  icon: {
    color: '#A0A0A0',
  },
  closeIcon: {
    alignItems: 'center',
    width: '10%',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'blue',
    color: 'white',
    flex: 1,
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
  },
  nameInput: {
    borderColor: '#A0A0A0',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    width: 300,
  },
});

export default HomePage;
