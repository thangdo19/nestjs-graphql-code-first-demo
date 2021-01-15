import { isEmpty } from 'lodash';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { FiltersExpression } from '../inputs/filters-expression.input';

export class JoinBuilder {
  /**
   * @usage Add "LEFT JOIN" for each "relationField" 
   * to query builder's reference
   * @param queryBuilder query builder's reference
   * @param filtersExpression filter object
   */
  static addToQueryBuilder<T>(
    queryBuilder: SelectQueryBuilder<T>,
    filtersExpression?: FiltersExpression
  ) {
    if (!filtersExpression || isEmpty(filtersExpression) ) return
    else this.handleFilter(queryBuilder, filtersExpression)
  }

  private static handleFilter<T>(
    queryBuilder: SelectQueryBuilder<T>,
    filters: FiltersExpression,
  ) {
    /* This "Set" list will prevent query builder keep joining the same table */
    const joinedEntities = new Set<string>()

    filters.filters.forEach(f => {
      this.addJoinQueryToQueryBuilder<T>(
        queryBuilder, 
        joinedEntities, 
        f.field, 
        f.relationField
      )
    })
    if (filters.childExpressions)
      filters.childExpressions.forEach(child => this.handleFilter(queryBuilder, child))
  }

  private static addJoinQueryToQueryBuilder<T>(
    queryBuilder: SelectQueryBuilder<T>, 
    joinedEntities: Set<string>,
    field: string, 
    relationField?: string
  ) {
    const entityName = field.split('.')[0];

    if (relationField && !joinedEntities.has(entityName)) {
      queryBuilder.leftJoinAndSelect(relationField, entityName);
      joinedEntities.add(entityName);
    }
  }
}