import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetails() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const [quantity, setQuantity] = useState(1);
  const bg = colorScheme === 'dark' ? '#232323' : '#fff';
  const textColor = colorScheme === 'dark' ? '#fff' : '#11181C';
  const cardBg = colorScheme === 'dark' ? '#151718' : '#fff';
  const priceColor = '#2ECC40';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bg }]}>  
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn}>
          <IconSymbol name="chevron.right" color={priceColor} size={28} style={{ transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
        {/* Product Image */}
        <View style={styles.imageBox}>
          <Image source={require('@/assets/images/cart.png')} style={styles.productImage} />
          <View style={styles.thumbRow}>
            <Image source={require('@/assets/images/cart.png')} style={styles.thumb} />
            <Image source={require('@/assets/images/cart.png')} style={styles.thumb} />
          </View>
        </View>
        {/* Product Info */}
        <Text style={[styles.title, { color: textColor }]}>{params.title || 'Product'}</Text>
        <Text style={[styles.price, { color: priceColor }]}>{params.price || ''}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingText}>4.7</Text>
          <Text style={styles.star}>★ ★ ★ ★ ★</Text>
        </View>
        <Text style={[styles.desc, { color: textColor }]}>Juicy, ripe oranges sourced directly from local farms. Packed with Vitamin C.</Text>
        {/* Quantity Selector */}
        <View style={styles.qtyRow}>
          <Text style={[styles.qtyLabel, { color: textColor }]}>Quantity</Text>
          <View style={styles.qtyBox}>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(q => Math.max(1, q - 1))}>
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.qtyValue, { color: textColor }]}>{quantity}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(q => q + 1)}>
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowBtn}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
        {/* Go to Cart Button */}
        <TouchableOpacity style={styles.cartNavBtn} onPress={() => router.push('/(main)/cart')}>
          <Text style={styles.cartNavBtnText}>Go to Cart</Text>
        </TouchableOpacity>
        {/* Related Products */}
        <Text style={[styles.relatedTitle, { color: textColor }]}>Related Products</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 40, // extra space for bottom nav
  },
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 2,
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 20,
  },
  imageBox: {
    marginTop: 32,
    marginBottom: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 220,
    height: 160,
    borderRadius: 16,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  thumbRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
    marginHorizontal: 4,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFD600',
    marginRight: 6,
  },
  star: {
    fontSize: 16,
    color: '#FFD600',
  },
  desc: {
    fontSize: 14,
    marginBottom: 16,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  qtyLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 16,
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  qtyBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#184D3A',
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 12,
  },
  actionRow: {
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 8,
  },
  addToCartBtn: {
    flex: 1,
    backgroundColor: '#2ECC40',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 8,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyNowBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2ECC40',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 8,
    backgroundColor: 'transparent',
  },
  buyNowText: {
    color: '#2ECC40',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartNavBtn: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#2ECC40',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  cartNavBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  relatedTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
});
