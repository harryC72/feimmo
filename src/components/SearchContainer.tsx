import React, { CSSProperties, useState, useEffect } from 'react'
import { Search } from './Search';
import { SearchResult } from './SearchResult';
import { Selection } from './Selection';
import { searchApiFetch, searchApiDetails } from './../services/searchApi';
import { PropertiesListEntry } from '../services/api';
import { PropertyFilter } from './PropertyFilter';

const container = {
    width: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

}

const searchContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
}

const selectionContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
}

const resContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start"
}

export const SearchContainer = () =>
{
    const [ searchInput, setSearchInput ] = useState( "" );
    const [ searchRes, setSearchRes ] = useState<any>( {} );
    const [ filter, setFilter ] = useState( "" );
    const [ selection, setSelection ] = useState( [] );
    const [ lastSearch, setLastSearch ] = useState( "" );
    const [ error, setError ] = useState( "" );

    useEffect( () =>
    {
        const callApi = async () =>
        {
            try
            {


                console.log( "FROM CONTAINER", lastSearch, filter )
                const res = await searchApiFetch( lastSearch, filter );

                if ( Object.keys( res ).length )
                {
                    const detailedArr = await getDetailedArr( res.properties );
                    setSearchRes( detailedArr );

                }
            } catch ( error )
            {
                setError( "An error occurred" );

            }
        }
        if ( filter.length > 0 )
        {
            callApi();

        }
    }, [ filter ] )

    const getDetailedArr = async ( arr: any ) =>
    {
        console.log( "ARR", arr );
        const resArr = [];
        for ( let i = 0; i < arr.length; i++ )
        {
            resArr.push( await searchApiDetails( arr[ i ].id ) )
        }

        console.log( resArr );
        return resArr;
    }


    const handleSubmit = async ( event: React.SyntheticEvent ) =>
    {
        setSearchRes( {} );
        setLastSearch( searchInput )
        setSearchInput( "" );
        event.preventDefault();
        try
        {

            const res = await searchApiFetch( searchInput );
            if ( Object.keys( res ).length )
            {
                const detailedArr = await getDetailedArr( res.properties );
                setSearchRes( detailedArr );

            }
        } catch ( error )
        {
            setError( "An error occurred" );

        }
    }

    return (
        <div style={ container as CSSProperties }>
            <div style={ searchContainer }><Search searchInput={ searchInput } setSearchInput={ setSearchInput } handleSubmit={ handleSubmit } /></div>
            <div style={ selectionContainer }><Selection selection={ selection } /></div>
            { searchRes && searchRes.length > 0 &&
                <div style={ resContainer }>
                    <PropertyFilter setFilter={ setFilter } filter={ filter } />
                    <SearchResult selection={ selection } searchRes={ searchRes } setSelection={ setSelection } />
                </div> }

        </div>
    )
}
