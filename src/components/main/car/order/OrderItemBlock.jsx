export const OrderItemBlock = (props) =>{
    return(
        <tr>
            <td align="center">{props.index+1}</td>
            <td align="center">{props.partName}</td>
            <td align="center"> {props.catalogNumber}</td>
            <td align="center">{props.partCount}</td>
        </tr>
    )
}