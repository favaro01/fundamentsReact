import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar 
                    src="https://media.licdn.com/dms/image/D4D03AQHsLG9sgGWr9Q/profile-displayphoto-shrink_800_800/0/1676209214796?e=1681948800&v=beta&t=1Z0bzQKTv5zi-8iBOocjnB7gv5cCcZxu9oOIhYDUSjg" 
                />
                <div className={styles.authorInfo}>
                    <strong>Rafael Favaro</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title="11 de Maio às 18:49h" dateTime="2023-02-17 18:49:00">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a> {' '}
                <a href="">#rocketseat</a>
            </p>
        </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
                placeholder="Deixe um comentário"
            />
            <footer>
                <button type="submit">
                    Publicar
                </button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </article>
  )
}
