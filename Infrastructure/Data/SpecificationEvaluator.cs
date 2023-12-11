using Core.Entities;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class SpecificationEvaluator<TEntity> where TEntity : BaseEntity
{
    public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery, ISpecification<TEntity> specification)
    {
        var query = inputQuery;
        
        query = specification.Criteria != null ? query.Where(specification.Criteria) : query;
        
        query = specification.OrderBy != null ? query.OrderBy(specification.OrderBy) : query;
        
        query = specification.OrderByDescending != null ? query.OrderByDescending(specification.OrderByDescending) : query;
        
        query = specification.IsPagingEnabled ? query.Skip(specification.Skip).Take(specification.Take) : query;
        
        query = specification.Includes.Aggregate(query, (current, include) => current.Include(include));
        return query;
    }
}