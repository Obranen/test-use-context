import React, {createContext, FC} from 'react'
import Test from './components/Test';

export interface IContext {
  name: string
  id: number
}

export const Context = createContext({} as IContext)

const App: FC = () => {
  return (
    <Context.Provider value={{
      name: 'Dima',
      id: 5
    }}>
      <Test/>
    </Context.Provider>
  )
}

export default App