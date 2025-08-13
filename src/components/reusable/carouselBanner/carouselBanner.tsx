import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, View } from 'react-native';
import BannerCustom from '../../common/banner/bannerCustom';
import { styles } from './carouselBanner.styles';
import { sizes } from '../../../utils/theme/sizes';

interface BannerData {
  image: any;           
  title: string;
  description: string;  
}

interface CarouselBannersProps {
  data: BannerData[];
  onBannerPress?: (index: number) => void;
}

const { width: deviceWidth } = Dimensions.get('window');

const CarouselBanners: React.FC<CarouselBannersProps> = ({ data, onBannerPress }) => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
       width={deviceWidth - sizes.lg * 2}
        height={220}
        autoPlay
        loop
        data={data}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 60,
        }}
        onSnapToItem={onBannerPress}
        renderItem={({ item, index }) => (
          <BannerCustom
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

export default CarouselBanners;
