using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
AddSwaggerServices(builder);
builder.Services.AddEndpointsApiExplorer();

AddStoreContext(builder); 
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    ConfigureSwagger(app);
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


