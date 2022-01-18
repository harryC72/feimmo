import React from 'react'
import { dropdown } from '../theme/theme'
import { headerDropDown } from './../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const tableNames = {
    display: "flex",
    width: 800

}

const iconContainer = {
    background: headerDropDown,
    width: "20px",
    height: "20px",
    padding: "2px 10px 2px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const checkedIcon = {
    background: headerDropDown,
    width: "20px",
    height: "20px",
    transform: "scale( 0.6 )",
    padding: "2px 10px 2px 10px",
}

const checkBox = {
    background: dropdown,
    width: "20px",
    height: "20px",

    padding: "2px 10px 2px 10px"
}

const tableHeader = {
    background: headerDropDown,
    width: "150px",
    height: "20px",
    padding: "2px 10px 2px 10px",
    borderLeft: "1px solid white",
    fontSize: 14,
    fontWeight: " bold"

}

const tables = {
    display: "flex",
    width: 800

}

const tableCtn = {
    background: dropdown,
    width: "150px",
    height: "20px",
    padding: "2px 10px 2px 10px",
    borderLeft: "1px solid",
    borderColor: dropdown,
    fontSize: 14,

}

interface Property
{
    address: string;
    id: string;
    propertyType: string;
    numberOfRooms: number;
    floorArea: number;
    postcode: string;
}

export const SearchResult = ( { searchRes, setSelection, selection }: { searchRes: any, setSelection: any, selection: any } ) =>
{
    const [ checkedItems, setCheckedItems ] = React.useState<any>( {} ); //plain object as state

    const handleCheckBoxChange = ( event: any ) =>
    {
        const id = event.target.value;
        // updating an object instead of a Map
        if ( event.target.checked == true )
        {
            const selectedProp = searchRes.filter( ( prop: any ) => prop.property.id === id )[ 0 ];
            setSelection( ( prevState: any ) => [ ...prevState, selectedProp ] )
        }
        if ( event.target.checked == false )
        {
            const newSelection = selection.filter( ( prop: any ) => prop.property.id !== id );
            setSelection( [ ...newSelection ] );
        }


        setCheckedItems( { ...checkedItems, [ event.target.value ]: event.target.checked } );
    }

    React.useEffect( () =>
    {
    }, [ checkedItems ] );

    return (
        <div>
            <h2 style={ { textAlign: "left", fontSize: 14, fontWeight: "bold", marginBottom: 5 } }>Search result</h2>
            <div>
                { searchRes && searchRes.length > 0 ? <div style={ tableNames }>
                    <div style={ iconContainer }><FontAwesomeIcon icon={ faCheck } style={ checkedIcon } /></div>
                    <div style={ tableHeader }>Address</div>
                    <div style={ tableHeader }>Postcode</div>
                    <div style={ tableHeader }>Property Types</div>
                    <div style={ tableHeader }>Number of Rooms</div>
                    <div style={ tableHeader }>Floor area(m2)</div> </div> : "" }
                { searchRes && searchRes.length > 0 && searchRes.map( ( item: any, index: number ) =>
                {
                    return ( <div key={ item.property.id } style={ tables }>
                        <div style={ checkBox }><input value={ item.property.id } type="checkbox" checked={ checkedItems[ item.property.id ] } onChange={ handleCheckBoxChange } /></div>
                        <div style={ tableCtn }>{ item.property.address }</div>
                        <div style={ tableCtn }>{ item.property.postcode }</div>
                        <div style={ tableCtn }>{ item.property.propertyType }</div>
                        <div style={ tableCtn }>{ item.property.numberOfRooms }</div>
                        <div style={ tableCtn }>{ item.property.floorArea }</div>
                    </div> )

                } ) }
            </div>
        </div>
    )
}
