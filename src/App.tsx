import GlobalStyle from './styles/global'
import RoutesApp from './routes'
import { AuthProvider } from './contexts/Auth/AuthProvider'

const App = () => {
    return (
        <>
        <GlobalStyle />
            <AuthProvider>
                <RoutesApp />
            </AuthProvider>
        </>)
}

export default App