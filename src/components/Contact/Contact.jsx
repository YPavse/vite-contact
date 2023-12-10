import Button from "../Button/Button";
import styles from "./Contact.module.css";
import {BiMessageAltDetail} from 'react-icons/bi';
import{HiOutlinePhoneMissedCall} from 'react-icons/hi';
import{MdEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <section className={styles.box}>
       <div className={styles.contactForm}>
        <div className={styles.btn}>
        <Button text=" CONNECT VIA CHAT " icon={<BiMessageAltDetail fontSize="25px"/>}/>
        <Button text=" CONNECT VIA CALL " icon={<HiOutlinePhoneMissedCall fontSize="25px"/>}/>
        </div>
        <Button 
         isOutline ={true}
        text=" CONNECT VIA EMAIL " icon={<MdEmail fontSize="25px"/>}/>

        <form>
            <div className={styles.form1}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name"/>
            </div>
            <div className={styles.form1}>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email"/>
            </div>
            <div className={styles.form1}>
              <label htmlFor="text">Message</label>
              <textarea type="text" name="text" rows="8"/>
            </div>
            
            <div style={{
              display: "flex",
              justifyContent:"end"
            }}>
            <Button text="SUBMIT "/>
            </div>
        </form>
       </div>
      <div className={styles.contactImage}>
        <img src="/images/contact.jpg" alt="error" />
      </div>
    </section>
  )
}

export default Contact
