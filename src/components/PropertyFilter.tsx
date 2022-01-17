import React, { useState } from 'react'
import { propertyFilterHeading } from '../content/content';
import { dropdown, headerDropDown } from '../theme/theme';
import { getPropertyTypes } from './../services/searchApi';

interface PropertyType
{
    label: string;
    value: string
}

interface PropertyTypesObj
{
    propertyTypes: PropertyType[];
}

const filterContainer = {
    display: "flex",
    flexDirection: "column",
    height: 100
}

const propHeading = {
    fontWeight: "bold",
    fontSize: 14,
    padding: "2px 10px 2px 10px",
    background: dropdown,
}

const ctn = {
    fontSize: 14,
    padding: "2px 10px 2px 10px",
    border: "none",
    background: dropdown,
}

const clicked = {
    background: headerDropDown,
    padding: "2px 10px 2px 10px",
    border: "none"
}

export const PropertyFilter = ( { setFilter, filter }: { setFilter: any, filter: any } ) =>
{
    const [ propertyTypes, setPropertyTypes ] = useState<PropertyType[] | []>( [] );
    let resultat: PropertyTypesObj;

    React.useEffect( () =>
    {
        const apiCall = async () =>
        {
            resultat = await getPropertyTypes();
            setPropertyTypes( resultat.propertyTypes );

        }
        apiCall();
    }, [] )

    const handleClick = ( e: any ) =>
    {
        const element = e?.currentTarget as HTMLInputElement
        const { value } = element;
        setFilter( value );

    }

    return (
        <div style={ filterContainer as React.CSSProperties }>
            <h2 style={ { textAlign: "left", fontSize: 14, fontWeight: "bold", marginBottom: 5 } }>Property Types</h2>
            <div style={ propHeading }>{ propertyFilterHeading }</div>
            <>{ propertyTypes && propertyTypes.length > 0 && propertyTypes.map( ( item, index: number ) =>
            {
                return <button value={ item.value } onClick={ handleClick } style={ filter.length && item.value === filter ? clicked : ctn } key={ `${ item.value } ${ index }` }>{ item.label }</button>

            } )
            }</>
        </div>
    )
}
