import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
   return(
      <div className={styles.messageListWrapper}>
         <img src={logoImg} alt="DoWhile 2021" />

         <ul className={styles.messageList}>
            <li className={styles.message}>
               <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque maiores officiis error qui suscipit dicta quasi aut dolorum, tempora enim accusamus! Id doloremque sunt soluta facere assumenda error at.</p>
               <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                     <img src="https://github.com/JanUrbanNeto.png" alt="Dinirso Alafuca" />
                  </div>
                  <span>Dinirso Alafuca</span>
               </div>
            </li>
            <li className={styles.message}>
               <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque maiores officiis error qui suscipit dicta quasi aut dolorum, tempora enim accusamus! Id doloremque sunt soluta facere assumenda error at.</p>
               <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                     <img src="https://github.com/JanUrbanNeto.png" alt="Dinirso Alafuca" />
                  </div>
                  <span>Dinirso Alafuca</span>
               </div>
            </li>
            <li className={styles.message}>
               <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque maiores officiis error qui suscipit dicta quasi aut dolorum, tempora enim accusamus! Id doloremque sunt soluta facere assumenda error at.</p>
               <div className={styles.messageUser}>
                  <div className={styles.userImage}>
                     <img src="https://github.com/JanUrbanNeto.png" alt="Dinirso Alafuca" />
                  </div>
                  <span>Dinirso Alafuca</span>
               </div>
            </li>
         </ul>
      </div>
   )
}