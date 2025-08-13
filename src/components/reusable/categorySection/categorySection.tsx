import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './categorySection.styles';

export interface Category {
  id: string;
  title: string;
}

interface CategorySectionProps {
  categories: Category[];
  selectedCategoryId?: string;
  onCategoryPress: (category: Category) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  selectedCategoryId,
  onCategoryPress
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Explorar categorías</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedCategoryId;
          return (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                isSelected && styles.selectedCategoryButton,
              ]}
              onPress={() => onCategoryPress(item)}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.selectedCategoryText,
                ]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategorySection;