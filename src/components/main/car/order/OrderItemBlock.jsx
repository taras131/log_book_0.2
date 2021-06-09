export const OrderItemBlock = (props) =>{
    return(
        <tr>
            <td align="center">{props.index+1}</td>
            <td align="left">{props.partName}</td>
            <td align="left"> {props.catalogNumber}</td>
            <td align="center">{props.partCount}</td>
        </tr>
    )
}