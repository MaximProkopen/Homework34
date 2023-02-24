import { useContext } from 'react'
import { Context } from '../App'

const Card = () => {

  const { user, setUser } = useContext(Context);
  console.log(user);
  const handleClick = () => {
    setUser("Random")
  }
  return (
    <div>
      <div>Card: {user}</div>
      <button onClick={handleClick}>Change name</button>
    </div>
  )
}

export default Card