import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.container}>
            <label htmlFor="search">Find contacts by name</label>
            <input type="text" id="search" value={value} onChange={(e)=>onFilter(e.target.value)}/>
        </div>
)}