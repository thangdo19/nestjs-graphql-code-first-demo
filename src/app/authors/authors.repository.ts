import { SortOrder } from "src/common/enums/sort-order.enum";
import { FiltersExpression } from "src/common/inputs/filters-expression.input";
import { FilterQueryBuilder } from "src/common/shits/FilterQueryBuilder";
import { EntityRepository, Repository } from "typeorm";
import { Author } from "./author.model";

@EntityRepository(Author)
export class AuthorsRepository extends Repository<Author> {
  async getMany(filters: FiltersExpression) {
    const qb = FilterQueryBuilder
      .getQueryBuilder<Author>(this, filters)

    return qb.getMany();
  }

  async getManySorted(sortOrder: SortOrder) {
    return this.find({ order: { firstName: sortOrder } })
  }
}
