import React from 'react';
import { List } from 'react-native-paper';
import styles from './CategoryListItemCustom.styles';
import type { StyleProp, TextStyle } from 'react-native';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface CategoryListItemProps {
  title: string;
  description?: string;
  icon: IconSource;
  onPress?: () => void;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
}

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  title,
  description,
  icon,
  onPress,
  titleStyle,
  descriptionStyle,
}) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} />}
      titleStyle={[styles.title, titleStyle]}
      descriptionStyle={[styles.description, descriptionStyle]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Categoría: ${title}`}
    />
  );
};

export default CategoryListItem;
