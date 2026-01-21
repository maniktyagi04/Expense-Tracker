import { UserProvider } from './context/UserContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
