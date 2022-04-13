import Moment from "moment";

export default function DateFormater(input: Date) {
    Moment.locale('en');
    const result = Moment(input).format("DD-MM-YYYY");
    return result;
}