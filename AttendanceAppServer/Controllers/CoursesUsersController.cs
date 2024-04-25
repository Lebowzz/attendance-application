using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AttendanceAppServer.Data;
using AttendanceAppServer.Models;

namespace AttendanceAppServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesUsersController : ControllerBase
    {
        private readonly CourseUserContext _context;

        public CoursesUsersController(CourseUserContext context)
        {
            _context = context;
        }

        // GET: api/CoursesUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseUser>>> GetCoursesUsers()
        {
          if (_context.CoursesUsers == null)
          {
              return NotFound();
          }
            return await _context.CoursesUsers.ToListAsync();
        }

        // GET: api/CoursesUsers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseUser>> GetCourseUser(int id)
        {
          if (_context.CoursesUsers == null)
          {
              return NotFound();
          }
            var courseUser = await _context.CoursesUsers.FindAsync(id);

            if (courseUser == null)
            {
                return NotFound();
            }

            return courseUser;
        }

        // PUT: api/CoursesUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseUser(int id, CourseUser courseUser)
        {
            if (id != courseUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(courseUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CoursesUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CourseUser>> PostCourseUser(CourseUser courseUser)
        {
          if (_context.CoursesUsers == null)
          {
              return Problem("Entity set 'CourseUserContext.CoursesUsers'  is null.");
          }
            _context.CoursesUsers.Add(courseUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseUser", new { id = courseUser.Id }, courseUser);
        }

        // DELETE: api/CoursesUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseUser(int id)
        {
            if (_context.CoursesUsers == null)
            {
                return NotFound();
            }
            var courseUser = await _context.CoursesUsers.FindAsync(id);
            if (courseUser == null)
            {
                return NotFound();
            }

            _context.CoursesUsers.Remove(courseUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseUserExists(int id)
        {
            return (_context.CoursesUsers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
