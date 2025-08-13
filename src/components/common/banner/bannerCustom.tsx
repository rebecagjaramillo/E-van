import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ImageSourcePropType } from 'react-native';
import { styles } from './bannerCustom.styles';

interface BannerProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
}

const BannerCustom: React.FC<BannerProps> = ({ image, title, description }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover source={image} style={styles.cover} />
      <Card.Content style={styles.content}>
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.description}>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default BannerCustom;