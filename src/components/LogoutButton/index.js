// Write your JS code here
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </>
  )
}

export default LogoutButton
