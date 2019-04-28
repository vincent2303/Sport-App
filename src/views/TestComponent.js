import React, { Component } from 'react';
import {
  View, Modal, Text, Picker, Dimensions, StyleSheet, Button, TouchableOpacity,
} from 'react-native';
import colors from '../globals/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  pickerTextStyle: {
    color: colors.electricYellow,
  },
});

const dynamicStyle = {
  backgroundColor: 'grey',
};

export default class ModalTester extends Component {
  state={
    visible: false,
  }

  render() {
    const { visible } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: dynamicStyle.backgroundColor }}>
        <Button title="try" onPress={() => { this.setState({ visible: true }); }} />
        <Modal
          transparent
          visible={visible}
          animationType="slide"
        >
          <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'flex-end',
          }}
          >
            <TouchableOpacity
              style={{ flex: 1, width }}
              onPress={() => { this.setState({ visible: false }); }}
            />
            <View style={{
              width,
              backgroundColor: colors.secondaryBlue,
              borderTopWidth: 1,
              borderColor: colors.electricYellow,
            }}
            >
              <Picker
                selectedValue="SHOULDERS"
                itemStyle={styles.pickerTextStyle}
              >
                <Picker.Item label="TORSO" value="java" />
                <Picker.Item label="ARMS" value="ARMS" />
                <Picker.Item label="SHOULDERS" value="ARMS" />
                <Picker.Item label="BACK" value="js3" />
                <Picker.Item label="ABS" value="js3" />
                <Picker.Item label="LEG" value="js4" />
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
