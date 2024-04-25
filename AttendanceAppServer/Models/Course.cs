using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AttendanceAppServer.Models
{
	[Table("courses")]
	public class Course
	{
		[Column("course_id")]
		public int Id { get; set; }

		[Required]
		[Column("course_name")]
		[StringLength(50)]
		public string name { get; set; }

		public Course() { }

		public Course(string name) => this.name = name;
	}
}
