import css from './Contact.module.css'

export default function Contact({ contact:{name,number,id}, onDelete }) {
    return (
        <div className={css.container}>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button className={css.button} onClick={() => { onDelete(id) }}>Delete</button>
        </div>
)}