import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import styles from "@/styles/Pokemon.module.css";

// 1. Interface para garantir que o TypeScript conheça a estrutura do Pokémon
interface PokemonProps {
  pokemon: {
    name: string;
    id: number;
    types: string[]; // ou o tipo correspondente à sua estrutura
    height: number;
    weight: number;
    
    // Você pode adicionar mais campos da PokeAPI aqui se precisar (ex: id, sprites, etc)
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((_: any, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.pokemonId;

  if (!id) {
    return { notFound: true };
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
}

// 4. Componente React devidamente tipado com a interface criada acima
export default function Pokemon({ pokemon }: PokemonProps) {
 return (
    <div className={styles.pokedexCard}>
      <h1 className={styles.pokemonName}>{pokemon.name}</h1>

      <div className={styles.imageContainer}>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
          alt={pokemon.name}
          width="150"
          height="150"
        />
      </div>

      <div className={styles.pokemonInfo}>
        <div className={styles.infoRow}>
          <h3>Número:</h3>
          <p className={styles.pokemonNumber}>{`#${pokemon.id}`}</p>
        </div>

        <div className={styles.infoRow}>
          <h3>Tipo:</h3>
          <div className={styles.typesContainer}>
            {pokemon.types.map((item: any, index: number) => {
              const typeClass = styles[`type_${item.type.name.toLowerCase()}`] || '';
              return (
                <span 
                  key={index} 
                  className={`${styles.typeBadge} ${typeClass}`}
                >
                  {item.type.name}
                </span>
              );
            })}
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <h4>Altura:</h4>
            <p>{(pokemon?.height || 0) * 10} cm</p>
          </div>
          <div className={styles.statBox}>
            <h4>Peso:</h4>
            <p>{(pokemon?.weight || 0) / 10} Kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}