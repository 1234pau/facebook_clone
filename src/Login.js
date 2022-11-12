import { auth, provider } from "./firebaseEnv"
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

const Login = () => {
  const [state, dispatch]=useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {

          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
            console.log(result)
        }).catch(error => alert(error.message))
    }
  return (
    <div>
      <button type="submit" onClick={signIn}>Log in</button>
    </div>
  )
}

export default Login
