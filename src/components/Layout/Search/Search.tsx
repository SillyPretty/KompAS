import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { isAuth } from '../../../hooks/useAuth'

import Auth from '../../../screens/Auth/Auth'

import Button from '../../Button/Button'
import Input from '../../Input/Input'

import styles from './Search.module.scss'
import SearchMenu from './Search_menu/SearchMenu'
import { useSearch } from './useSearch'

const Search = () => {
  const { handleClickBtn, isVisibleMenu } = useSearch()
  const [isVisibleAuth, setIsVisibleAuth] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const isAuthorization = isAuth()

  const handleSearch = (e: any) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery.trim())}`)
      window.location.reload()
    }
  }

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
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <Link to={'/cart'} className={styles.search__button}>
            <img src='/images/icons/Cart.svg' alt='Cart' />
          </Link>
          <Link to={'/favorite'} className={styles.search__button}>
            <img src='/images/icons_search/Favorite.svg' alt='Favorite' />
          </Link>
          {isAuthorization ? (
            <button
              className={styles.search__button}
              onClick={() => navigate('/profile')}
            >
              <img src='/images/icons/User_icon.svg' />
            </button>
          ) : (
            <button
              className={styles.search__button}
              onClick={() => setIsVisibleAuth(!isVisibleAuth)}
            >
              <img src='/images/icons_search/Enter.svg' alt='Enter' />
            </button>
          )}
          {isVisibleAuth && <Auth setIsVisibleAuth={setIsVisibleAuth} />}
        </div>
        {isVisibleMenu && <SearchMenu />}
      </div>
    </div>
  )
}

export default Search
