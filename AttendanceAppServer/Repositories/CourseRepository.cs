using AttendanceAppServer.Data;
using AttendanceAppServer.Models;

namespace AttendanceAppServer.Repositories
{
	public interface ICourseRepository
	{
		public IEnumerable<Course> AllCourses { get; }
		Course? GetCourseById(int courseId);
	}


	public class CourseRepository : ICourseRepository
	{
		private readonly CourseContext _courseDbContext;

		public CourseRepository(CourseContext courseDbContext)
		{
			_courseDbContext = courseDbContext;
		}

		public IEnumerable<Course> AllCourses { get => _courseDbContext.Courses; }

		IEnumerable<Course> ICourseRepository.AllCourses => _courseDbContext.Courses;

		Course? ICourseRepository.GetCourseById(int courseId)
		{
			return AllCourses.FirstOrDefault(u => u.Id == courseId);
		}

	}
}
