using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
AddSwaggerServices(builder);
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

AddStoreContext(builder); 
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    ConfigureSwagger(app);
}

app.UseStaticFiles();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var context = services.GetRequiredService<StoreContext>();
var logger = services.GetRequiredService<ILogger<Program>>();
try
{
    await context.Database.MigrateAsync();
    await StoreContextSeed.SeedAsync(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "An error occurred during migration");
}

app.UseAuthorization();
app.MapControllers();
app.Run();
return;

void AddStoreContext(WebApplicationBuilder webAppBuilder)
{
    var connectionString = webAppBuilder.Configuration.GetConnectionString("DefaultConnection");
    webAppBuilder.Services.AddDbContext<StoreContext>(options => options.UseSqlite(connectionString));
}

void AddSwaggerServices(IHostApplicationBuilder webApplicationBuilder)
{
    webApplicationBuilder.Services.AddSwaggerGen();
}

void ConfigureSwagger(IApplicationBuilder application)
{
    application.UseSwagger();
    application.UseSwaggerUI();
}


