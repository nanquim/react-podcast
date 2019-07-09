import React from 'react'
import { Container, InputContent } from './style.js'

const useInputValue = ({initialValue, placeholder}) => {
    const [value, setValue] = useState(initialValue)

    return{
        value,
        placeholder,
        onChange: event => setValue(event.target.value)
    }
}


const Search = () => {
 return(
     <Container>
         <InputContent>
            <form onSubmit={handleSubmit}>
                <input placeholder={'Search a podcast'}/>
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>
         </InputContent>
     </Container>
 )
 
}

export default Search