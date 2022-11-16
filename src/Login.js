import { auth, provider } from "./firebaseEnv"
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"
import './login.css'
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
    <div className="containerLogin">
      <main>
        <svg
            className='logoLogin'
            viewBox="-150 -48.38625 1300 290.3175">
                <path 
                    d="M63.35 190.562H25.669V96.628H0V66.045h25.668V44.283C25.668 18.495 37.021 0 74.6 0c7.948 0 20.426 1.602 20.426 1.602V30H81.92c-13.354 0-18.568 4.062-18.568 15.292v20.753h31.174L91.75 96.628H63.351zm86.46-126.961c-.549 0-1.114.02-1.673.034-34.94 0-50.926 26.282-50.926 63.59 0 46.998 20.736 65.808 51.199 65.808 17.429 0 28.88-7.336 35.84-21.026v18.568h35.84V66.058h-35.84v19.149c-5.683-12.32-17.454-21.46-34.44-21.606zm9.113 29.423c14.675 0 23.483 10.236 23.483 27.647l.034 17.783c0 11.735-7.275 25.464-23.517 25.464-24.97 0-24.303-26.962-24.303-35.942 0-30.207 13.304-34.952 24.303-34.952zm75.641 35.299c0-15.131-.724-64.641 63.78-64.641 25.893 0 36.705 8.233 36.705 8.233l-8.69 26.953s-10.798-5.946-24.868-5.946c-18.021 0-29.52 10.447-29.52 28.828l.02 13.18c0 17.662 11.095 29.452 29.537 29.452 12.818 0 24.632-6.002 24.632-6.002l8.668 26.39s-9.886 8.285-36.303 8.285c-61.418 0-63.96-44.42-63.96-64.732zm310.628-64.688c34.941 0 51.179 26.282 51.179 63.59 0 46.998-20.737 65.808-51.2 65.808-17.429 0-30.313-7.335-37.273-21.026v18.568l-35.389-.014V3.786L510.083.509V83.52c5.423-14.523 23.245-19.885 35.11-19.885zm-10.534 29.389c-14.675 0-24.575 10.236-24.575 27.647l-.035 17.783c-.022 11.735 6.856 25.464 24.61 25.464 24.97 0 24.303-26.962 24.303-35.942 0-30.207-13.303-34.952-24.303-34.952zM400.243 63.738c-39.63 0-60.552 21.607-60.552 60.005v7.134c0 49.837 29.381 62.668 64.409 62.668 34.047 0 49.458-9.523 49.458-9.523l-7.031-25.36s-18.128 7.713-37.922 7.713c-20.52 0-29.345-5.23-31.607-24.95h79.564V121.08c0-41.652-23.481-57.343-56.32-57.343zm.955 25.394c13.718 0 22.607 8.412 22.119 27.921h-46.25c.802-20.533 10.388-27.92 24.131-27.92zm270.094-25.565c-40.697 0-62.122 22.934-62.122 64.033 0 56.39 36.932 65.467 62.19 65.467 36.976 0 61.576-19.907 61.576-64.955 0-46.887-27.66-64.545-61.644-64.545zm-.512 29.559c17.895 0 24.986 13.393 24.986 28.638v13.107c0 18.468-9.922 29.15-25.054 29.15-14.152 0-24.098-9.992-24.098-29.15v-13.107c0-20.432 11.835-28.638 24.166-28.638zm137.01-29.559c-40.697 0-62.122 22.934-62.122 64.033 0 56.39 36.932 65.467 62.19 65.467 36.975 0 61.576-19.907 61.576-64.955 0-46.887-27.661-64.545-61.644-64.545zm-.512 29.559c17.895 0 24.985 13.393 24.985 28.638v13.107c0 18.468-9.922 29.15-25.053 29.15-14.152 0-24.098-9.992-24.098-29.15v-13.107c0-20.432 11.835-28.638 24.166-28.638zm76.355 97.436V3.786L921.316.51v125.189l37.386-59.653h39.796l-39 61.783L1000 190.562h-39.909l-38.775-60.914v60.914z" fill="rgb(73, 73, 190)"/>
        </svg>
      <button type="submit" onClick={signIn}>Log in with Google</button>
      </main>
      
    </div>
  )
}

export default Login
