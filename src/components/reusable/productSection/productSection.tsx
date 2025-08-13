import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CardGeneric from '../../common/cardGeneric/cardGeneric';
import styles from './productSection.styles';

import type { Product } from '../../../utils/types/products';

interface ProductSectionProps {
  title: string;
  products: Product[];
  onProductPress?: (product: Product) => void;
  horizontal?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  onProductPress,
  horizontal = true,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onProductPress?.(item)}
            accessibilityRole="button"
            accessibilityLabel={`Producto: ${item.name}`}
          >
            <CardGeneric
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.images[0]}
              rating={item.rating}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={horizontal ? styles.listContainer : undefined}
      />
    </View>
  );
};

export default ProductSection;
