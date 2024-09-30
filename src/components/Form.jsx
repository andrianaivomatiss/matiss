import { useState } from "react"
import styles from"./form.module.css"
export default function Form({todos,setTodos}){
    const[todo,setTodo]=useState({name:"",done:false});
    function handleSubmit(e){
   e.preventDefault();
   if (todo.name.trim() === "") {
    alert("Veuillez renseigner le champ");
    return;
}
   setTodos([...todos,todo]);
   setTodo({name:"",done:false});
}
return(
    <form className={styles.todoForm} action="" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <input 
        className={styles.modernInput}
        placeholder="Ajoutez un rêve"
        type="text" 
        onChange={(e)=>setTodo({name:e.target.value,done:false})} value={todo.name} />
        <button className={styles.modernButton}>Add</button>
        </div>
</form>
)
}