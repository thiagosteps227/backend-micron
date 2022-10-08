import { Connection } from "typeorm/connection/Connection";
import { createConnection, getConnectionOptions } from "typeorm/globals";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test" ? "db_test" : defaultOptions.database,
    })
  );
};
