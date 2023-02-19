// Components 
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"; 

// CSS
import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>      
        <main>
          <Post 
            author="Rafael Favaro" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt mollitia omnis ut quos veniam aliquid deserunt quia! Dolore laudantium quidem voluptas vero iste similique nostrum eveniet sunt qui commodi!"
          />     
          <Post 
            author="Jorge" 
            content="au au au aua ua aua ua "
          />      
        </main>
      </div>
    </div>
  )
}

 
