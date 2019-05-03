using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DesafioPrevisaoTempo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DesafioPrevisaoTempo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CidadesController : ControllerBase
    {
        private readonly IEnumerable<Cidade> _cidades = new List<Cidade>
        {
            new Cidade
            {
                Id = 1,
                Nome = "Blumenau",
                Estado = "Santa Catarina"
            },
            new Cidade
            {
                Id = 2,
                Nome = "Gaspar",
                Estado = "Santa Catarina"
            },
            new Cidade
            {
                Id = 3,
                Nome = "Timbó",
                Estado = "Santa Catarina"
            },
            new Cidade
            {
                Id = 4,
                Nome = "Florianópolis",
                Estado = "Santa Catarina"
            }
        };

        // GET: api/Cidade
        [HttpGet]
        public IEnumerable<Cidade> Get()
        {
            return _cidades;
        }

        // GET: api/Cidade/5
        [HttpGet("{id}", Name = "Get")]
        public Cidade Get(int id)
        {
            return _cidades.First(x => x.Id == id);
        }

        // POST: api/Cidade
        [HttpPost]
        public void Post([FromBody] Cidade value)
        {
        }

        // PUT: api/Cidade/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Cidade value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
