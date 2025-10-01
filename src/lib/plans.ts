export type Plan = {
  name: 'Básico' | 'Estándar' | 'Premium';
  price: string;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    name: 'Básico',
    price: '€150',
    features: [
      '1 hora de sesión',
      '10 fotos editadas',
      'Entrega digital',
    ],
    cta: 'Reservar Básico',
  },
  {
    name: 'Estándar',
    price: '€300',
    features: [
      '2 horas de sesión',
      '25 fotos editadas',
      'Galería privada',
    ],
    cta: 'Reservar Estándar',
  },
  {
    name: 'Premium',
    price: '€600',
    features: [
      '4 horas de sesión',
      '60 fotos editadas',
      'Impresiones incluidas',
    ],
    cta: 'Reservar Premium',
  },
];
