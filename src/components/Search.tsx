import React, { SetStateAction } from 'react'
import { searchButton, searchHeading } from "../content/content"
import { searchButtonStyle } from '../theme/theme'

const formStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: 800
}

const submitButton = {
    backgroundColor: searchButtonStyle,
    marginLeft: 10,
    width: 100,
    height: 25,
    border: "none",
    borderRadius: 4,
    fontSize: 14,
}

const inputField = {
    width: 600,
    borderRadius: 4,
    border: "1px solid lightgrey",
    height: 20,
    fontSize: 14,
}

export const Search = ( { searchInput, setSearchInput, handleSubmit }: { searchInput: string, setSearchInput: React.Dispatch<React.SetStateAction<string>>, handleSubmit: React.FormEventHandler<HTMLFormElement> } ) =>
{
    const handleChange = ( event: React.FormEvent<HTMLInputElement> ) =>
    {
        setSearchInput( event.currentTarget.value );
    }
    return (
        <div style={ { marginTop: 40 } } >
            <h2 style={ { textAlign: "left", fontSize: 14, fontWeight: "bold", marginBottom: 5 } }>{ searchHeading }</h2>
            <form style={ formStyle } onSubmit={ handleSubmit }>
                <input id="searchField" style={ inputField } placeholder="Address" type="text" value={ searchInput } onChange={ handleChange } name="search" />
                <input style={ submitButton } type="submit" value={ searchButton } />
            </form>
        </div>
    )
}
