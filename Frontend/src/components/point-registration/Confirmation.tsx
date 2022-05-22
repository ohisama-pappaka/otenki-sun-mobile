import React, { Dispatch, SetStateAction, useCallback } from "react";
import { View, Modal, Pressable, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "src/hooks/hooks";

type Props = {
  selectedPrefecture: string;
  setSelectedPrefecture: Dispatch<SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: Dispatch<SetStateAction<string>>;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const Confirmation = ({
  selectedPrefecture,
  setSelectedPrefecture,
  selectedCity,
  setSelectedCity,
  modalVisible,
  setModalVisible,
}: Props) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // キャンセル時の入力データのクリア
  const onRefresh = useCallback(() => {
    setModalVisible(false);
    setSelectedPrefecture("");
    setSelectedCity("");
  }, []);

  return (
    <View style={tailwind("flex-1 justify-center items-center mt-20")}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={tailwind("flex-1 justify-center items-center mt-20")}>
          <View
            style={tailwind(
              "m-20 bg-white rounded-lg p-0 items-center px-4 py-10"
            )}
          >
            <Text style={tailwind("mb-4 text-center")}>
              {selectedPrefecture}
              {selectedCity}
              を登録しますか？
            </Text>
            <View style={tailwind("flex flex-row")}>
              <Pressable
                style={tailwind(
                  "rounded-lg border-2 border-gray-500 p-2 m-2 bg-white"
                )}
                // XXX: 警告が出ていることは確認している
                onPress={() => {
                  dispatch({
                    type: "CHANGE_INPUT_TEXT",
                    prefectureName: selectedPrefecture,
                    cityName: selectedCity,
                  });
                  navigation.navigate("Home");
                }}
              >
                <Text style={tailwind("font-bold text-center")}>登録する</Text>
              </Pressable>
              <Pressable
                style={tailwind(
                  "rounded-lg border-2 border-red-600 p-2 m-2 bg-red-600"
                )}
                onPress={() => {
                  onRefresh();
                }}
              >
                <Text style={tailwind("text-white font-bold text-center")}>
                  キャンセル
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Confirmation;
