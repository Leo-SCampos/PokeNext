// src/components/Card.tsx
import Image from 'next/image';
import styles from '../styles/Card.module.css';

// Importa as tipagens e funções do seu domínio
import { CardProps, formatPokemonId, getPokemonImageUrl } from '../components/domain/pokemon';



export default function Card({ pokemon }: CardProps) {
  // Consumindo as funções do domínio
  const formattedId = formatPokemonId(pokemon.id);
  // Adicione o "raw." antes de githubusercontent
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;


  return (
    <div className={styles.card_container}>
      <span className={styles.pokemon_id}>{formattedId}</span>

      <div className={styles.pokemon_image}>
        <Image
          src={imageSrc}
          width={150}
          height={150}
          alt={pokemon.name}
          priority={pokemon.id <= 9}
        />
      </div>

      <p>{formattedId}</p>
      <h3 className={styles.pokemon_name}>{pokemon.name}</h3>
      <a href={`/pokemon/${pokemon.id}`}>Detalhes</a>
    </div>
  );
}
