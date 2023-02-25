// Components 
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"; 
import styles from './App.module.css';
// CSS
import './global.css';

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/61809600?v=4', 
      name: 'Rafael Favaro',
      role:'Web Developer',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},      
      {type: 'link', content:'jane.design/doctorcare'},                  
    ],
    publishedAt: new Date('2023-02-24 20:00:00'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/diego3g.png', 
      name: 'Diego Fernandes',
      role:'CTO @Rocketseat',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},      
      {type: 'link', content:'jane.design/doctorcare'},                  
    ],
    publishedAt: new Date('2023-02-22 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>      
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

 
