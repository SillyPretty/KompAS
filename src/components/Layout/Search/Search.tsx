import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'

import { useProfile } from './Search'
import styles from './Search.module.scss'
import SearchMenu from './Search_menu/SearchMenu'

const Search = () => {
  const { handleClickBtn, isVisibleMenu } = useProfile()

  return (
    <div className='container'>
      <div className={styles.search__wrap}>
        <Button size='normal' onClick={handleClickBtn} active={isVisibleMenu ? 'active' : null}>
          {!isVisibleMenu && <img src='/icons/Menu.svg' alt='Menu' />}
          Каталог
          {isVisibleMenu && <img src='/icons/Arrow.svg' alt='Arrow' />}
        </Button>
        <Input
          icon='/icons_search/Search.svg'
          type='text'
          placeholder='Поиск'
        />
        <button className={styles.search__button}>
          <img src='/icons/Cart.svg' alt='Cart' />
        </button>
        <button className={styles.search__button}>
          <img src='/icons_search/Favorite.svg' alt='Favorite' />
        </button>
        <button className={styles.search__button}>
          <img src='/icons_search/Enter.svg' alt='Enter' />
        </button>
      </div>
      {isVisibleMenu && <SearchMenu />}
    </div>
  )
}

export default Search
