/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const MonthsList = ({navigation, route}) => {
  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text>This month is:</Text>
        <Text>{route.params.month}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title="Go to Months List"
          onPress={() => navigation.push('Months')}
        />
        <Button title="Go to Home" onPress={() => navigation.popToTop()} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
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
});

export default MonthsList;
