import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

export default function About(): React.JSX.Element {
  return (
    <div className={styles.pokedexContainer}>
      <div className={styles.pokedexScreen}>
        
        {/* Topo com os botões/luzes clássicos da Pokédex */}
        <div className={styles.pokedexHeader}>
          <div className={styles.blueLight}></div>
          <div className={styles.smallLightRed}></div>
          <div className={styles.smallLightYellow}></div>
          <div className={styles.smallLightGreen}></div>
        </div>

        {/* Tela interna onde as informações ficam */}
        <div className={styles.innerScreen}>
          <h1 className={styles.title}>Pagina Sobre</h1>
          <p className={styles.description}>
            Projeto criado para catalogar e identificar Pokémons
          </p>
          
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/charizard.png" 
              width={300} 
              height={300} 
              alt="Imagem do charizard"
              className={styles.pokemonImage}
              priority
            />
          </div>
          
          <Link href="/" className={styles.backButton}>
            Voltar
          </Link>
        </div>

        {/* Botões físicos decorativos na parte inferior (estilo Pokédex) */}
        <div className={styles.pokedexControls}>
          <div className={styles.blackDPad}>
            <div className={styles.dPadHorizontal}></div>
            <div className={styles.dPadVertical}></div>
          </div>
          <div className={styles.consoleButtons}>
            <div className={styles.longButtonBlack}></div>
            <div className={styles.longButtonBlue}></div>
          </div>
        </div>

      </div>
    </div>
  );
}
