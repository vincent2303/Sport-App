import React from 'react';

export default function ModalPicker() {
  return (
    function CategoryPicker({
      visible, selectionArray, closePicker, onSelect, selectedValue,
    }) {
      return (
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
              onPress={closePicker}
            />
            <View style={{
              width,
              backgroundColor: colors.secondaryBlue,
              borderTopWidth: 1,
              borderColor: colors.electricYellow,
            }}
            >
              <Picker
                selectedValue={selectedValue}
                itemStyle={styles.pickerTextStyle}
                onValueChange={(itemValue) => { onSelect(itemValue); }}
              >
                { selectionArray.map(selectionString => (
                  <Picker.Item
                    key={selectionString}
                    label={selectionString.toUpperCase()}
                    value={selectionString}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      );
    }
  );
}
