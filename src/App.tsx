import { useRoutes } from 'solid-app-router'
import { Component, lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./pages/index')),
  },
]

const App: Component = () => {
  const Routes = useRoutes(routes)

  return <Routes />
}

export default App
