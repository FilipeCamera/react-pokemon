import styles from "./List.module.scss";

interface Props {
  pokemons: any[];
}

export default function List({ pokemons }: Props) {
  return (
    <div className={styles.list}>
      <h1 className={styles.list__title}>Pokemons</h1>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <h3 className={styles.list__text}>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}
