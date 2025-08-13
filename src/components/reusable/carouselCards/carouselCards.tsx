import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { View } from 'react-native';
import CardGeneric from '../../common/cardGeneric/cardGeneric';
import { styles } from './carouselCards.styles';
import { sizes } from '../../../utils/theme/sizes';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: any;
  rating: number;
}

interface CarouselCardsProps {
  data: Product[];
  onCardPress?: (index: number) => void;
}

const CarouselCards: React.FC<CarouselCardsProps> = ({ data, onCardPress }) => {
  const deviceWidth = sizes.layout.deviceWidth;

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        width={deviceWidth * 0.8}
        height={280}
        autoPlay={false}
        loop={false}
        data={data}
        scrollAnimationDuration={800}
        mode="horizontal-stack"
        modeConfig={{
          snapDirection: 'left',
          stackInterval: 18,
        }}
        renderItem={({ item, index }) => (
          <CardGeneric
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            rating={item.rating}
            onPress={() => onCardPress?.(index)}
          />
        )}
      />
    </View>
  );
};

export default CarouselCards;