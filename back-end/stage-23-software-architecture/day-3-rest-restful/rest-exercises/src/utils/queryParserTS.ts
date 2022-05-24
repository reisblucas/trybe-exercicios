import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";

type queryParams = RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader;

const queryParserTS = (result: queryParams) => JSON.parse(JSON.stringify(result));

export default queryParserTS;
