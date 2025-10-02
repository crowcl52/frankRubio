export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: 'María G.', role: 'Novia', quote: 'Capturó cada emoción con una sensibilidad increíble. Un trabajo impecable.' },
  { name: 'Javier R.', role: 'Director creativo', quote: 'Minimalista, elegante y con intención. Exactamente lo que buscábamos.' },
  { name: 'Lucía P.', role: 'Artista', quote: 'Supo dirigir con calma y crear atmósferas muy potentes.' },
];
