import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50+" 
            />
            <div className={styles.profile}>
                <Avatar 
                    src="https://media.licdn.com/dms/image/D4D03AQHsLG9sgGWr9Q/profile-displayphoto-shrink_800_800/0/1676209214796?e=1681948800&v=beta&t=1Z0bzQKTv5zi-8iBOocjnB7gv5cCcZxu9oOIhYDUSjg" 
                />
                <strong>Rafael Favaro</strong>
                <span>Web Developer</span>
            </div>

            <footer className={styles.footer}>
                <a href="">
                    <PencilLine size={20} /> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}