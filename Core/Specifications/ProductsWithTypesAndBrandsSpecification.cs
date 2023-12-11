using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications;

public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
{
    public ProductsWithTypesAndBrandsSpecification(ProductSpecParams @params) : 
        base(x => 
            (string.IsNullOrEmpty(@params.Search) || x.Name.ToLower().Contains(@params.Search)) && 
            (!@params.BrandId.HasValue || x.ProductBrandId == @params.BrandId) && 
            (!@params.TypeId.HasValue || x.ProductTypeId == @params.TypeId))
    {
        AddInclude(x => x.ProductType);
        AddInclude(x => x.ProductBrand);
        AddOrderBy(x => x.Name);
        
        ApplyPaging(@params.PageSize * (@params.PageIndex - 1), @params.PageSize);
        
        if (string.IsNullOrEmpty(@params.Sort)) return;
        switch (@params.Sort)
        {
            case "priceAsc":
                AddOrderBy(p => p.Price);
                break;
            case "priceDesc":
                AddOrderByDescending(p => p.Price);
                break;
            default:
                AddOrderBy(p => p.Name);
                break;
        }
    }

    public ProductsWithTypesAndBrandsSpecification(int id) : 
        base(product => product.Id == id)
    {
        AddInclude(x => x.ProductType);
        AddInclude(x => x.ProductBrand);
    }
}