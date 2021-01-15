import { Repository } from 'typeorm';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { FiltersExpression } from '../inputs/filters-expression.input';
import { JoinBuilder } from './JoinBuilder';
import WhereBuilder from './WhereBuilder';

export class FilterQueryBuilder {
  static getQueryBuilder<T>(
    entityRepository: Repository<T>,
    filtersExpression?: FiltersExpression,
  ): SelectQueryBuilder<T> {
    const queryBuilder = entityRepository.createQueryBuilder()
    JoinBuilder.addToQueryBuilder<T>(queryBuilder, filtersExpression)
    WhereBuilder.addToQueryBuilder<T>(queryBuilder, filtersExpression)

    return queryBuilder
  }
}