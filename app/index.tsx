import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView className="">
      <ScrollView>
        <View className="mt-10 flex flex-col p-4 gap-10 bg-gray-50">
          <Text className="text-pink-400 text-3xl text-center">
            Fuentes y colores personalizados con NativeWind
          </Text>
          <Text className="font-inter-black text-3xl text-center text-primary">
            Inter Black
          </Text>
          <Text className="font-inter-bold text-3xl text-center text-secondary">
            Inter Bold
          </Text>
          <Text className="font-inter-extrabold text-3xl text-center text-tertiary">
            Inter ExtraBold
          </Text>
          <Text className="font-inter-extralight text-3xl text-center text-success">
            Inter ExtraLight
          </Text>
          <Text className="font-inter-light text-3xl text-center text-tranparent">
            Inter Light
          </Text>
          <Text className="font-inter-medium text-3xl text-center text-tranparent-500">
            Inter Medium
          </Text>
          <Text className="font-inter-regular text-3xl text-center text-tranparent-900">
            Inter Regular
          </Text>
          <Text className="font-inter-semibold text-3xl text-center">
            Inter SemiBold
          </Text>
          <Text className="font-inter-thin text-3xl text-center">
            Inter Thin
          </Text>

          <Text
            style={{ fontFamily: "Inter-Light" }}
            className="text-2xl text-center"
          >
            Probando desde Styles.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
