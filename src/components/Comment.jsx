import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }


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
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>  

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
