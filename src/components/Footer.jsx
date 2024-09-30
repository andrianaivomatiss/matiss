import styles from"./footer.module.css"
export default function Footer({completedTodos,totalTodos}){
    return(
        <div className={styles.footer}>
            <span className={styles.item}>Les accomplissement:{completedTodos}/{totalTodos} </span>
            <span className={styles.item}>Totale des rêves à accomplir:{totalTodos}</span>
        </div>
    )
}