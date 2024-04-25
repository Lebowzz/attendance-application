using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AttendanceAppServer.Models
{
	[Table("courses_users")]
	public class CourseUser
	{
		[Column("course_user_id")]
		public int Id { get; set; }

		[Required]
		[Column("user_id")]
		public int user_Id { get; set; }
		
		[Required]
		[Column("course_id")]
		public int course_Id { get; set; }

		public CourseUser() { }

		public CourseUser(int user_Id, int course_Id) => (this.user_Id, this.course_Id) = (user_Id, course_Id);
	}
}
