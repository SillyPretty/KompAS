import Button from '../../../ui/Button/Button'
import Input from '../../../ui/Input/Input'

import styles from './Search.module.scss'
import SearchMenu from './Search_menu/SearchMenu'
import { useSearch } from './useSearch'

const Search = () => {
  const { handleClickBtn, isVisibleMenu } = useSearch()

  return (
    <div className='sticky'>
      <div className='container'>
        <div className={styles.search__wrap}>
          <Button
            size='normal'
            onClick={handleClickBtn}
            active={isVisibleMenu ? 'active' : null}
          >
            {!isVisibleMenu && <img src='/images/icons/Menu.svg' alt='Menu' />}
            Каталог
            {isVisibleMenu && <img src='/images/icons/Arrow.svg' alt='Arrow' />}
          </Button>
          <Input
            icon='/images/icons_search/Search.svg'
            type='text'
            placeholder='Поиск'
          />
          <button className={styles.search__button}>
            <img src='/images/icons/Cart.svg' alt='Cart' />
          </button>
          <button className={styles.search__button}>
            <img src='/images/icons_search/Favorite.svg' alt='Favorite' />
          </button>
          <button className={styles.search__button}>
            <img src='/images/icons_search/Enter.svg' alt='Enter' />
          </button>
        </div>
        {isVisibleMenu && <SearchMenu />}
      </div>
    </div>
  )
}

export default Search
