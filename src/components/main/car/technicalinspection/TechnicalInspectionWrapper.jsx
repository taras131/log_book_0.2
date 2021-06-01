import {InsuranceAndInspection} from "../car_common/InsuranceAndInspection";
import {useDispatch, useSelector} from "react-redux";
import {addTechnicalInspection} from "../../../../redux/technicalinspection/technicalInspectionReducer";
import {getInspectionDateValidById} from "../../../../redux/technicalinspection/technicalInspectionSelector";

export const TechnicalInspectionWrapper = (props) => {
    const dispatch = useDispatch()
    const dateInsuranceIsValid = useSelector(state => getInspectionDateValidById(state, props.id))
    const addNew = (insuranceIsValid, id, userId) => {
        dispatch(addTechnicalInspection(insuranceIsValid, id, userId))
    }
    return(
        <InsuranceAndInspection title ="Техосмотр действителен" startDateTitle = "Техосмотр проведён:" untilDateTitle = "Действителен до:"
                                periodTitle = "Срок действия ТО:"
                                dateIsValid = {dateInsuranceIsValid}
                                addNew = {addNew}
                                id ={props.id} userId ={props.userId} />
    )
}