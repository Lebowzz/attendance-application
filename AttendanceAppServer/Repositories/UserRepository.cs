using AttendanceAppServer.Data;
using AttendanceAppServer.Models;

namespace AttendanceAppServer.Repositories
{
	public interface IUserRepository
	{
		public IEnumerable<User> AllUsers { get; }
		User? GetUserById(int userId);
	}


	public class UserRepository : IUserRepository
	{
		private readonly UserContext _userDbContext;

		public UserRepository(UserContext userDbContext)
		{
			_userDbContext = userDbContext;
		}

		public IEnumerable<User> AllUsers { get => _userDbContext.Users; }

		IEnumerable<User> IUserRepository.AllUsers => _userDbContext.Users;

		User? IUserRepository.GetUserById(int userId)
		{
			return AllUsers.FirstOrDefault(u => u.Id == userId);
		}

	}
}
