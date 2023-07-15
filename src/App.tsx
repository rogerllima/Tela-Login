import GlobalStyle from './styles/global'
import RoutesApp from './routes'
import { AuthProvider } from './contexts/Auth/AuthProvider'

const App = () => {
    return (
        <>
            <AuthProvider>
                <RoutesApp />
                <GlobalStyle />
            </AuthProvider>
        </>)
}

export default App