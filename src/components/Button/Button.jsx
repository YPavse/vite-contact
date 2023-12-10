import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <>
   <button className={props.isOutline ? styles.btn2 : styles.btn1}> 
   {props.icon }
   &nbsp; 
   {props.text}
   </button>
   </>
  )
}

export default Button
