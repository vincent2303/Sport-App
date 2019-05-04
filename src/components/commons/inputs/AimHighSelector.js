import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Modal,
  Picker,
  StyleSheet,
} from 'react-native';
import commonStyles from '../../../globals/commonStyles';
import colors from '../../../globals/colors';
import dimensions, { width } from '../../../globals/dimensions';

const styles = StyleSheet.create({
  container: { marginBottom: dimensions.margin },
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
                  label={categories[categoryId].name.toUpperCase()}
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

function SelectorText({ textValue }) {
  if (!textValue) {
    return null;
  }
  return <Text style={commonStyles.AHlargeYellowText}>{textValue.toUpperCase()}</Text>;
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
    const textValue = categories[selectedValue] ? categories[selectedValue].name : null;

    return (
      <TouchableOpacity
        style={[commonStyles.AHsecondaryContainerWithBorder, styles.container]}
        onPress={this.onPressField}
      >
        <View style={{ width: '35%' }}>
          <Text style={commonStyles.AHlargeWhiteText}>{fieldName.toUpperCase()}</Text>
        </View>
        <SelectorText textValue={textValue} />
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
