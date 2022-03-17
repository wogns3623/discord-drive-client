import React, { useState } from 'react'

interface props {
  isLoading?: boolean
  setIsLoading?: (value: boolean) => void
  isLogin?: boolean
  setIsLogin?: (value: boolean) => void
}

const AppContext = React.createContext<props>({
  isLoading: false,
  setIsLoading: () => null,
  isLogin: false,
  setIsLogin: () => null,
})

const ContextWrapper = (props: any) => {
  const handleLogin = (value: boolean) => {
    setIsLogin(true)
  }

  const handleLoading = (value: boolean) => {
    setIsLoading(value)
  }
  const [isLoading, setIsLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isLogin,
        setIsLogin: handleLogin,
        setIsLoading: handleLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export { AppContext, ContextWrapper }
