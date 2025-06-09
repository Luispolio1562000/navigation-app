import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product, navigation]);

  if (!product) return <Redirect href="/(drawer)/(tabs)/(stack)/products" />;
  return (
    <View className="flex flex-col gap-4 p-4">
      <Text className="text-2xl font-inter-bold">{product.title}</Text>
      <Text className="text-gray-500 font-inter-light">
        {product.description}
      </Text>
      <Text className="text-xl font-inter-bold">${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
