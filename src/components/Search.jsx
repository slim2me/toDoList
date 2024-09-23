import { useContext } from 'react'
import TaskContext from '../context/TaskContext.jsx'

const Search = () => {
    const {setSearch,clear}=useContext(TaskContext)

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const deleteAll = () => {
        clear()
    }
    return (
        <>
            <hr />
            <div className="footerContent" >
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    onChange={handleSearch}
                />
                <span onClick={deleteAll} className="clear">
                    Clear
                </span>
            </div>
        </>
    )
}
export default Search