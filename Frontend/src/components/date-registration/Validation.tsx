import React, { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
  isOverlappingVali: boolean;
  setIsOverlappingVali: Dispatch<SetStateAction<boolean>>;
  overlappingData: string;
  isInputNull: boolean;
  setIsInputNull: Dispatch<SetStateAction<boolean>>;
  setInputYear: Dispatch<SetStateAction<string>>;
  setInputMonth: Dispatch<SetStateAction<string>>;
  setInputDay: Dispatch<SetStateAction<string>>;
};
const Validation = ({
  isOverlappingVali,
  setIsOverlappingVali,
  overlappingData,
  isInputNull,
  setIsInputNull,
  setInputYear,
  setInputMonth,
  setInputDay,
}: Props) => {
  const tailwind = useTailwind();
  return (
    <>
      {/* データの重複がある場合 */}
      <View style={tailwind("flex-1 justify-center items-center mt-20")}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isOverlappingVali}
        >
          <View style={tailwind("flex-1 justify-center items-center mt-20")}>
            <View
              style={tailwind(
                "m-20 bg-white rounded-lg p-0 items-center px-4 py-10"
              )}
            >
              <Text style={tailwind("mb-4 text-center")}>
                {overlappingData}
                は既に登録されています
              </Text>

              <Pressable
                style={tailwind(
                  "rounded-lg border-2 border-red-600 p-2 m-2 bg-red-600"
                )}
                onPress={() => {
                  setIsOverlappingVali(false);
                  setInputYear("");
                  setInputMonth("");
                  setInputDay("");
                }}
              >
                <Text style={tailwind("text-white font-bold text-center")}>
                  キャンセル
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      {/* データに欠損がある場合 */}
      <View style={tailwind("flex-1 justify-center items-center mt-20")}>
        <Modal animationType="slide" transparent={true} visible={isInputNull}>
          <View style={tailwind("flex-1 justify-center items-center mt-20")}>
            <View
              style={tailwind(
                "m-20 bg-white rounded-lg p-0 items-center px-2 py-10"
              )}
            >
              <Text style={tailwind("mb-4 text-center")}>
                データの入力に誤りがあります！
              </Text>

              <Pressable
                style={tailwind(
                  "rounded-lg border-2 border-red-600 p-2 m-2 bg-red-600"
                )}
                onPress={() => {
                  setIsInputNull(false);
                  setInputYear("");
                  setInputMonth("");
                  setInputDay("");
                }}
              >
                <Text style={tailwind("text-white font-bold text-center")}>
                  キャンセル
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Validation;
