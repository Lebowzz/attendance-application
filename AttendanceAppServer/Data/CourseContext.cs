using AttendanceAppServer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace AttendanceAppServer.Data
{
	public class CourseContext : DbContext
	{
		public CourseContext(DbContextOptions<CourseContext> options) : base(options) { }

		public DbSet<Course> Courses { get; set; }
	}

	/*public class CourseContextFactory : IDesignTimeDbContextFactory<CourseContext>
	{
		public CourseContext CreateDbContext(string[] args)
		{
			var optionsBuilder = new DbContextOptionsBuilder<CourseContext>();
			string connection = "Server=(localdb)\\mssqllocaldb;Database=AttendanceApp;Trusted_Connection=True;MultipleActiveResultSets=true";
			optionsBuilder.UseSqlServer(connection);

			return new CourseContext(optionsBuilder.Options);
		}
	}*/
}
