import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";

type TResponseDatabaseParams = RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader;

export const rowParser = (data: TResponseDatabaseParams) => JSON.parse(JSON.stringify(data));