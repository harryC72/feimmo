import React, { CSSProperties } from 'react'
import { dropdown } from '../theme/theme'
import { headerDropDown } from './../theme/theme';

const selectionContainer = {

}

const tableNames = {
    display: "flex",
    background: headerDropDown,
    width: 800
}

const tableHeader = {
    background: headerDropDown,
    width: "202px",
    height: "20px",
    padding: "2px 10px 2px 10px",
    borderLeft: "1px solid white",
    fontSize: 14,
    fontWeight: "bold"
}





const tables = {
    display: "flex",
    background: dropdown,
    width: 800
}

const tableCtn = {
    background: dropdown,
    width: "202px",
    height: "20px",
    padding: "2px 10px 2px 10px",
    borderLeft: "1px solid",
    borderColor: dropdown,
    fontSize: 14,
}

export const Selection = ( { selection }: { selection: any } ) =>
{
    console.log( "SELECTION FROM SELECTION", selection );

    return (
        <div>
            { selection && selection.length > 0 && < h2 style={ { textAlign: "left", fontSize: 14, fontWeight: "bold", marginBottom: 5 } } > Selected Properties</h2> }
            <div>
                { selection && selection.length > 0 ? <div style={ tableNames }>
                    <div style={ tableHeader as CSSProperties }>Address</div>
                    <div style={ tableHeader as CSSProperties }>Postcode</div>
                    <div style={ tableHeader as CSSProperties }>Number of Rooms</div>
                    <div style={ tableHeader as CSSProperties }>Floor area(m2)</div> </div> : "" }
                { selection && selection.length > 0 && selection.map( ( item: any, index: number ) =>
                {
                    return ( <div key={ item.property.id } style={ tables }>
                        <div style={ tableCtn }>{ item.property.address }</div>
                        <div style={ tableCtn }>{ item.property.postcode }</div>
                        <div style={ tableCtn }>{ item.property.numberOfRooms }</div>
                        <div style={ tableCtn }>{ item.property.floorArea }</div>
                    </div> )

                } ) }
            </div>
        </div>
    )
}
