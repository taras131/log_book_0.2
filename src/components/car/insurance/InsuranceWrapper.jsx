import {useDispatch, useSelector} from "react-redux";
import {addNewInsurance} from "../../../redux/insurance/insuranceReducer";
import {getInsuranceDateValidById} from "../../../redux/insurance/insuranceSelector";
import {InsuranceAndInspection} from "../car_common/InsuranceAndInspection";

export const InsuranceWrapper = (props) => {
    const dispatch = useDispatch()
    const dateInsuranceIsValid = useSelector(state => getInsuranceDateValidById(state, props.id))
    const addNew = (insuranceIsValid, id, userId) => {
        dispatch(addNewInsurance(insuranceIsValid, id, userId))
    }
    return (
        <InsuranceAndInspection title="Страховка действительна" startDateTitle="Застрахована:"
                                untilDateTitle="Действительна до:"
                                periodTitle="Срок страхования:"
                                dateIsValid={dateInsuranceIsValid}
                                addNew={addNew}
                                id={props.id}
                                userId={props.userId}
                                brand={props.brand}
                                num={props.num}/>
    )
}