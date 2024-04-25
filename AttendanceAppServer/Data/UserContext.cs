using AttendanceAppServer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace AttendanceAppServer.Data
{
	public class UserContext : DbContext
	{
		public UserContext(DbContextOptions<UserContext> options) : base(options) { }

		public DbSet<User> Users { get; set; }
	}

	/*public class UserContextFactory : IDesignTimeDbContextFactory<UserContext>
	{
		public UserContext CreateDbContext(string[] args)
		{
			var optionsBuilder = new DbContextOptionsBuilder<UserContext>();
			string connection = "Server=(localdb)\\mssqllocaldb;Database=AttendanceApp;Trusted_Connection=True;MultipleActiveResultSets=true";
			optionsBuilder.UseSqlServer(connection);

			return new UserContext(optionsBuilder.Options);
		}
	}*/
}
