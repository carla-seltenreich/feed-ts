import { Header } from './components/Header';
import { Sidebar } from './components/Sideb';
import { Post } from './components/Post';

import styles from './App.module.css'
// import posts from '../posts.json';
import './global.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.content}>
        <Sidebar />
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App