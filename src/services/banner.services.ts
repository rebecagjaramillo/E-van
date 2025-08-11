import { Banner } from '../utils/types/banners';

export const getBannerData = (): Banner[] => [
  {
    id: 'b1',
    image: '#F5E6CC', 
    title: 'Nueva Colección: Eovan Vitalizing',
    description: 'Productos para fortalecer y estimular el crecimiento de tu cabello.',
    action: { type: 'category', payload: 'Crecimiento y Anti-caída' },
  },
  {
    id: 'b2',
    image: '#F5E6CC', 
    title: 'Estilo de Salón en Casa',
    description: 'Descubre los mejores productos de fijación y acabado para un look perfecto.',
    action: { type: 'category', payload: 'Fijación y Moldeado' },
  },
  {
    id: 'b3',
    image: '#F5E6CC', 
    title: 'Descuento en Kits de Viaje',
    description: 'Protege tu cabello en cualquier lugar con nuestros kits especiales.',
    action: { type: 'product', payload: 'p27' },
  },
];