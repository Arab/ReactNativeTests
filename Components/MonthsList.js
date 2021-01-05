/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Months} from './Months';

const MonthsList = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <FlatList
            data={Months}
            renderItem={({item}) => (
              <View style={styles.sectionTitle}>
                <Button
                  color={item.id % 3 === 0 ? 'blue' : 'black'}
                  title={item.month}
                  onPress={() =>
                    navigation.push('MonthDetails', {month: item.month})
                  }
                />
              </View>
            )}
            initialNumToRender={12}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
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
