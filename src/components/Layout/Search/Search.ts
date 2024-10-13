import { useMemo, useState } from 'react'

export const useProfile = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

  const handleClickBtn = () => setIsVisibleMenu(!isVisibleMenu)

  return useMemo(() => ({ handleClickBtn, isVisibleMenu }), [handleClickBtn])
}
