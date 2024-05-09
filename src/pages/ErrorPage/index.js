import { useNavigate } from 'react-router-dom'
import MainNavigation from '../MainNavigation'

const ErrorPage = () => {

  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate("")
  }

  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured</h1>
        <p>Could not find the page you are looking for!</p>
        <button onClick={navigateHandler}>Go back to home</button>
      </main>
    </>
  )
}

export default ErrorPage