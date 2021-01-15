import { isEmpty, map } from 'lodash';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { Filter } from '../inputs/filter.input';
import { FiltersExpression } from '../inputs/filters-expression.input'

type ParamValue = string | number | Array<string|number>;

export default class WhereBuilder {
  private static params: Record<string, ParamValue> = {}
  private static paramsCount = 0

  static addToQueryBuilder<T>(
    queryBuilder: SelectQueryBuilder<T>,
    filtersExpression?: FiltersExpression
  ) {
    if (!filtersExpression)
      return;

    this.params = {}
    this.paramsCount = 0

    const whereSql = this.getWhereSqlFromFilter(filtersExpression)
    queryBuilder.where(whereSql, this.params);
  }

  private static getWhereSqlFromFilter(fe: FiltersExpression): string {
    const sqlWithParamKeysArray = map(fe.filters, f => this.buildFilter(f));
    const sqlWithParamKeysOfChildrenArray = map(fe.childExpressions, child => this.getWhereSqlFromFilter(child));
    const allSqlBlocks = [
      ...sqlWithParamKeysArray, 
      ...sqlWithParamKeysOfChildrenArray
    ]
    
    /**
     * First argument of queryBuilder.where(), you know what im saying ;). 
     * @action Merging every children part of the highest node with the operator.
     * 
     * @example "Author.firstName LIKE :Author.firstName_1 OR Post.id = :Post.id_2"
     */
    const sqlWithParamKeysAndOperator = allSqlBlocks.join(` ${fe.operator} `)

    return isEmpty(sqlWithParamKeysAndOperator) ? '' : `(${sqlWithParamKeysAndOperator})`;
  }

  private static buildFilter(filter: Filter): string {
    /* Nothing special, just make the param of where query looks differently */
    const paramName = `${filter.field}_${++this.paramsCount}`;

    switch (filter.op) {
      case 'EQ':
        this.params[paramName] = filter.values[0];
        return `${filter.field} = :${paramName}`;
      case 'IN':
        this.params[paramName] = filter.values;
        return `${filter.field} IN (:${paramName})`;
      case 'LIKE':
        this.params[paramName] = `%${filter.values[0]}%`;
        return `${filter.field} LIKE :${paramName}`;
      case 'GE':
        this.params[paramName] = filter.values[0];
        return `${filter.field} >= :${paramName}`;
      default:
        throw new Error(`Unknown filter operation: ${filter.op}`);
    }
  }
}
