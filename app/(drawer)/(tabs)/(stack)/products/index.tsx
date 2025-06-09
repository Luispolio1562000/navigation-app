import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 flex-col gap-4 p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-col p-4 border-b border-gray-200 gap-3">
            <Text className="text-2xl font-inter-bold">{item.title}</Text>
            <Text className="text-gray-500 font-inter-light">
              {item.description}
            </Text>
            <View className="flex flex-row justify-between items-center">
              <Text className="text-xl font-inter-bold">${item.price}</Text>
              <Link href={`/(drawer)/(tabs)/(stack)/products/${item.id}`}>
                <Text className="text-primary">Ver detalle</Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
