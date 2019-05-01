import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Modal,
  Picker,
  Dimensions,
  StyleSheet,
} from 'react-native';
import commonStyles from '../../globals/commonStyles';

import colors from '../../globals/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  pickerTextStyle: {
    color: colors.electricYellow,
  },
  modalContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'flex-end',
  },
  pickerContainer: {
    width,
    backgroundColor: colors.secondaryBlue,
    borderTopWidth: 1,
    borderColor: colors.electricYellow,
  },
});

function CategoryPicker({
  visible, categories, closePicker, onSelect, selectedValue,
}) {
  const categoriesIdArray = Object.keys(categories);
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={{ flex: 1, width }}
          onPress={closePicker}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue}
            itemStyle={styles.pickerTextStyle}
            onValueChange={(itemValue) => { onSelect(itemValue); }}
          >
            {
              categoriesIdArray.map(categoryId => (
                <Picker.Item
                  key={categoryId}
                  label={categories[categoryId].toUpperCase()}
                  value={categoryId}
                />
              ))
            }
          </Picker>
        </View>
      </View>
    </Modal>
  );
}

function SelectionValue({ selectedValue }) {
  if (!selectedValue) {
    return null;
  }
  return <Text style={commonStyles.AHlargeYellowText}>{selectedValue.toUpperCase()}</Text>;
}

export default class AimHighSelector extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  onPressField = () => {
    Keyboard.dismiss();
    this.setState({ visible: true });
  }

  closePicker = () => {
    this.setState({ visible: false });
  }

  render() {
    const {
      fieldName, categories, selectedValue, onSelect,
    } = this.props;
    const { visible } = this.state;

    return (
      <TouchableOpacity
        style={commonStyles.AHsecondaryContainerWithBorder}
        onPress={this.onPressField}
      >
        <View style={{ width: '35%' }}>
          <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
        </View>
        <SelectionValue selectedValue={categories[selectedValue]} />
        <CategoryPicker
          visible={visible}
          categories={categories}
          selectedValue={selectedValue}
          closePicker={this.closePicker}
          onSelect={onSelect}
        />
      </TouchableOpacity>
    );
  }
}
