import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Card from "../components/Card";

import Link from "next/link";

//Chamada dos Pókemons pela API
//import { GetServerSidePropsContext } from "next";

export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  


  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  //add pokemon index
interface PokemonBase {
  name: string;
  url: string;
  id?: number; // O ponto de interrogação indica que é opcional antes de ser atribuído
}

  data.results.forEach((item: PokemonBase, index: number) =>{
    item.id = index + 1
  })
  return{
    props: {
      pokemons: data.results
    }
  }
  
}

// 1. Defina a estrutura de um Pokémon e das Props do componente
interface PokemonData {
  id: number;
  name: string;
  url: string;
}

interface HomeProps {
  pokemons: PokemonData[];
}

// 2. Aplique a tipagem nas Props ({ pokemons }: HomeProps)
export default function Home({ pokemons }: HomeProps) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span className={styles.title_span}>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="Pokebola"/>
      </div>
      <div className={styles.pokemon_container}>
        {/* 3. Adicione a tipagem no parâmetro do map: (pokemon: PokemonData) */}
        {pokemons.map((pokemon: PokemonData) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
}
