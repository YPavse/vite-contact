import styles from "./Navigator.module.css"

const Navigator = () => {

    return (
     <nav className={`${styles.navigator} container`}>
      <div className="logo">
          <img src="/images/logo.png" alt="error" />
      </div>
  
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  
     </nav>
    )
  }
  
  export default Navigator
  