import { v4 as uuidV4 } from "uuid";
import { Entity } from "typeorm/decorator/entity/Entity";
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn";
import { Column } from "typeorm/decorator/columns/Column";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
