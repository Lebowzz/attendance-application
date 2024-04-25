using AttendanceAppServer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace AttendanceAppServer.Data
{
	public class CourseUserContext : DbContext
	{
		public CourseUserContext(DbContextOptions<CourseUserContext> options) : base(options) { }

		public DbSet<CourseUser> CoursesUsers { get; set; }
	}

	public class CourseUserContextFactory : IDesignTimeDbContextFactory<CourseUserContext>
	{
		public CourseUserContext CreateDbContext(string[] args)
		{
			var optionsBuilder = new DbContextOptionsBuilder<CourseUserContext>();
			string connection = "Server=(localdb)\\mssqllocaldb;Database=AttendanceApp;Trusted_Connection=True;MultipleActiveResultSets=true";
			optionsBuilder.UseSqlServer(connection);

			return new CourseUserContext(optionsBuilder.Options);
		}
	}
}
