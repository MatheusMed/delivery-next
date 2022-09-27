import { useState } from 'react';
import styles from './styles.module.css';


type Props = {
  mainColor: string

  onSearch: (search: string) => void;
}

const SearchInput = ({ mainColor, onSearch }: Props) => {

  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState('');

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {

    if (event.code === 'Enter') {
      onSearch(search);
    }

  }

  return (
    <div className={styles.container}
      style={{ borderColor: focused ? mainColor : '#ffff' }} >
      <div className={styles.button}
        onClick={() => onSearch(search)}
      ></div>
      <input
        type="text"
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.inputSearch}
      />
    </div>
  );
}


export default SearchInput;