import { useState } from "react" 

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange =({target}) => {
    //     setInputValue(target.value);
    //    // console.log(event.target.value)
    // }

    const onInputChange =(event) => {
      setInputValue(event.target.value);
     // console.log(event.target.value)
  }

    const onSubmit = (event) => {
        
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        //console.log(inputValue)
        //console.log(setCategories)
        //setCategories((categories) => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() )
        setInputValue('');
        //console.log(event)
    }
   return (
  //<form onSubmit={(event) => onSubmit(event)} >
    <form onSubmit={ onSubmit } >
      <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
      />
      {/* <button onClick={ onNewCategory }>Agregar</button> */}
    </form>
  )
}



