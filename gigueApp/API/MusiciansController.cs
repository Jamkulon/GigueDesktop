using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using gigueApp.Models;
using gigueApp.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace gigueApp.API
{
    [Route("api/[controller]")]
    public class MusiciansController : Controller
    {

        private ApplicationDbContext _db;

        [HttpGet]
        public List<Musician> Get()
        {
            List<Musician> Musicians = (from m in _db.Musicians select m).ToList();

            return Musicians;
        }

        [HttpGet("{id})")]

        public IActionResult Get(int id)

        {
            Musician musician = (from m in _db.Musicians where m.Id == id select m).FirstOrDefault();

            if (musician != null)
{
                return Ok(musician);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Musician musician)
        {
            if (musician == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Musicians.Add(musician);
                _db.SaveChanges();

                return Ok(musician);
            }
        }

        public MusiciansController(ApplicationDbContext db)
        {
            _db = db;
        }
    }

}

