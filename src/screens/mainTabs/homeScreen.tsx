import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AppBarCustom from '../../components/appBar/appBarCustom';
import CarouselBanners from '../../components/reusable/carouselBanner/carouselBanner';
import CategorySection, { Category } from '../../components/reusable/categorySection/categorySection';
import ProductSection from '../../components/reusable/productSection/productSection';
import { getBannerData } from '../../services/banner.services';
import { getCategories } from '../../services/categories.services';
import products from '../../services/product.services';
import type { Product } from '../../utils/types/products';
import { colors } from '../../utils/theme/colors';
import { sizes } from '../../utils/theme/sizes';
    
const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>();

  // Memoiza datos estáticos
  const banners = useMemo(() => getBannerData(), []);
  const categories = useMemo(() => getCategories(), []);
  
  // Filtra productos por categoría y búsqueda
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategoryId ? product.category === selectedCategoryId : true;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery]);

  // Callbacks memoizados para handlers
  const handleCartPress = useCallback(() => {
    console.log('Ir al carrito');
  }, []);

  const handleProfilePress = useCallback(() => {
    console.log('Ir al perfil');
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleBannerPress = useCallback((index: number) => {
    console.log('Banner presionado:', index);
  }, []);

  const handleCategoryPress = useCallback((category: Category) => {
    setSelectedCategoryId(category.id);
    console.log('Categoría seleccionada:', category.title);
  }, []);

  const handleProductPress = useCallback((product: Product) => {
    console.log('Producto seleccionado:', product.name);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBarCustom
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onCartPress={handleCartPress}
        onProfilePress={handleProfilePress}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CarouselBanners data={banners} onBannerPress={handleBannerPress} />

        <CategorySection
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onCategoryPress={handleCategoryPress}
        />

        <ProductSection
          title="Lo más vendido"
          products={filteredProducts}
          onProductPress={handleProductPress}
          horizontal
        />

        <ProductSection
          title="Nuevas llegadas"
          products={filteredProducts}
          onProductPress={handleProductPress}
          horizontal
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.ui.surface,
  },
  scrollContent: {
    paddingBottom: sizes.md,
  },
});

export default HomeScreen;