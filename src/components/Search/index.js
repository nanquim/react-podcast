import Reacy from 'react'

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
