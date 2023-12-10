# Repository Pattern

The Repository Pattern is a popular design pattern for handling data access.
It encapsulates the logic required to access data sources, providing a substitution point for the unit tests.
Thus, it promotes a cleaner separation of concerns and helps to maintain the modular architecture.

## Goals:
- Decouple business code from data access.
- Separation of concerns.
- Minimize duplicate query logic.
- Testability.

**Note**:
DbContext could handle this by itself, however if we control it manually its easier to manage and test.

## Consequences
- Increased level of abstraction.
- Increased maintainability, flexibility, and testability.
- More classes/interfaces - less duplicate code.
- Business logic further away from the data. (It's a good thing: We don't want our business logic tied too closely to our data as then it makes it very difficult to move away from a particular database technology or an object relational mapper technology.)
- Harder to optimize certain operations against the data source.

![https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/learn/lecture/18136742#notes](RepositoryPattern.png "The Repository Pattern")

We inject the repository into the Controller, so the controller is going to see what's available.
This way the controller becomes a lot easier to manage.

The repository has access to the DbContext and that's responsible for the `_context.Products.ToList()` method.

And that's going to get passed back up the chain to the controller, which would then return those results to the client that was requesting it.
