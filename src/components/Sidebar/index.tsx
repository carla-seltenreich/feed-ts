import styles from "./index.module.css"

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/carla-seltenreich.png"/>

                <div className={styles.description}>
                    <strong>Carla Cristina Seltenreich</strong>
                    <span>Programming Student | CRIE TI Univates</span>
                </div>
            </div>
        </aside>
    )  
}