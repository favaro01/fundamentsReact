import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
  return (
    <div className={styles.comment}>      
      <Avatar 
        hasBorder={false}
        src="https://media.licdn.com/dms/image/D4D03AQHsLG9sgGWr9Q/profile-displayphoto-shrink_800_800/0/1676209214796?e=1681948800&v=beta&t=1Z0bzQKTv5zi-8iBOocjnB7gv5cCcZxu9oOIhYDUSjg" 
      />      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}> 
              <strong>Rafael Favaro</strong>
              <time title="11 de Maio às 18:49h" dateTime="2023-02-17 18:49:00">Cerca de 1h atrás</time>
            </div>  
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>  

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
