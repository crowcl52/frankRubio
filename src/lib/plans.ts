export type Plan = {
  name: string;
  price: string;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: '2-4 personas',
    price: '$180',
    features: [
      '60 minutos de sesión',
      '1-2 outfit',
      '20-25 imágenes editadas',
      'En nuestra galería en línea, listas para imprimir',
    ],
    cta: 'Reservar Sesión',
  },
  {
    name: '5-10 personas',
    price: '$330',
    features: [
      '60 minutos de sesión',
      '1-2 outfit',
      '20-25 imágenes editadas',
      'En nuestra galería en línea, listas para imprimir',
    ],
    cta: 'Reservar Sesión',
  },
  {
    name: '11+ personas',
    price: '$600',
    features: [
      '60 minutos de sesión',
      '1-2 outfit',
      '20-25 imágenes editadas',
      'En nuestra galería en línea, listas para imprimir',
    ],
    cta: 'Reservar Sesión',
  },
];
