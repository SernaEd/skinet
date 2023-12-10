# App Architecture

This solution (skinet.sln) is using a layered architecture layout.

![https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/learn/lecture/18136738#overview](ArchitectureImage.png "App Architecture")

Here is a brief overview of how these layers interact:

1. Client makes requests to the application via the API layer.
2. The API layer communicates with the Infrastructure layer to perform operations such as data access.
3. The Infrastructure layer uses the types defined in the Core layer to communicate what kind of data should be fetched or saved.
4. The Infrastructure layer retrieves/saves the data and passes it back up to the API layer.
5. The API layer then sends a response back to the client.

## Benefits of this Architecture

The layered architecture used in this solution is a commonly used pattern and is generally considered good. 
It has several advantages:

1. **Separation of Concerns (SoC)**: Each layer has a specific responsibility. This makes it easy to locate related code, reduces dependencies between components, and aids in managing complexity.
2. **Reusability**: Business logic in the Core layer can be reusable, as it's decoupled from the infrastructure and presentation (API) layers.
3. **Testability**: Decoupling of components allows for unit tests to be written against each layer independently.
4. **Maintainability**: This design makes future modifications easier, as changes in one layer do not directly impact others.
5. **Consistency**: New developers can easily understand the structure and layout, as this architecture is widely used and has resources and best practices available.

## Disadvantages of the Layered Architecture

1. **Over-engineering**: For simple or small applications, this architecture could involve an unnecessary level of complexity.
2. **Performance Overhead**: Each layer of abstraction adds a small performance cost.
3. **Tight Coupling between Layers**: Despite its structure, often changes in lower layers can still have a ripple effect on higher layers.

## API Project {collapsible="true"}

The web API project handles HTTP requests and communicates with underlying layers (Core and Infrastructure).

It contains:

- Startup application
- Contains:
  - Dependency Injection
  - Middleware
- Responsible for routing any requests that come in to the controllers, which are part of the API.


## Infrastructure Project {collapsible="true"}

This layer contains classes for accessing external resources. 
Responsible for sending queries to the database.

- [Repository](Repository-Pattern.md) 
- DbContext
- Services

The infrastructure will have Stripe integration and payment services.

## Core Project {collapsible="true"}

This could also be known as the Domain layer. It encapsulates business logic and types, business rules, and domain classes (entities).
It will also contain the interfaces.