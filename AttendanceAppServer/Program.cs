using AttendanceAppServer.Data;
using AttendanceAppServer.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddDbContext<UserContext>(options => {
	options.UseSqlServer(
	builder.Configuration["ConnectionStrings:UserContextConnection"]);
});
builder.Services.AddDbContext<CourseContext>(options => {
	options.UseSqlServer(
	builder.Configuration["ConnectionStrings:UserContextConnection"]);
});
builder.Services.AddDbContext<CourseUserContext>(options => {
	options.UseSqlServer(
	builder.Configuration["ConnectionStrings:UserContextConnection"]);
});

builder.Services.AddControllers();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ICourseRepository, CourseRepository>();
builder.Services.AddScoped<ICourseUserRepository, CourseUserRepository>();

builder.Services.AddCors();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(config =>
{
	config.SwaggerDoc("v1", new OpenApiInfo() { Title = "User API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Error");
}

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.MapControllers();


if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI(config =>
	{
		config.SwaggerEndpoint("/swagger/v1/swagger.json", "User API");
	});
}

app.Run();
