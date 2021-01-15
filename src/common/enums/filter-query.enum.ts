import { registerEnumType } from "@nestjs/graphql";

export enum Operator {
  AND = 'AND',
  OR = 'OR',
}

export enum Operation {
  EQ = 'EQ',
  IN = 'IN',
  LIKE = 'LIKE',
  GE = 'GE',
}

registerEnumType(Operator, { name: 'Operator' })
registerEnumType(Operation, { name: 'Operation' })