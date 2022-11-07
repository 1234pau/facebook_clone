import { auth, provider } from "./firebaseEnv"

const Login = () => {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
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
