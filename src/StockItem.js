import React from 'react'

function StockItem(props)
{
    return(
        
            <tr>
                <td>
                    {props.item.name}
                </td>
                <td>
                    {props.item.symbol}
                </td>
                <td>
                    {props.item.price}
                </td>
                <td>
                    {props.item.dayLow}
                </td>
                <td>
                    {props.item.dayHigh}
                </td>
            </tr>
               
        
    )
}

export default StockItem