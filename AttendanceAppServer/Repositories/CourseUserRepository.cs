using AttendanceAppServer.Data;
using AttendanceAppServer.Models;

namespace AttendanceAppServer.Repositories
{
	public interface ICourseUserRepository
	{
		public IEnumerable<CourseUser> AllCoursesUsers { get; }
		CourseUser? GetCourseUserById(int courseUserId);
	}


	public class CourseUserRepository : ICourseUserRepository
	{
		private readonly CourseUserContext _courseUserDbContext;

		public CourseUserRepository(CourseUserContext courseUserDbContext)
		{
			_courseUserDbContext = courseUserDbContext;
		}

		public IEnumerable<CourseUser> AllCoursesUsers { get => _courseUserDbContext.CoursesUsers; }

		IEnumerable<CourseUser> ICourseUserRepository.AllCoursesUsers => _courseUserDbContext.CoursesUsers;

		CourseUser? ICourseUserRepository.GetCourseUserById(int courseUserId)
		{
			return AllCoursesUsers.FirstOrDefault(u => u.Id == courseUserId);
		}

	}
}
