using System.Collections.Generic;
using DesafioPrevisaoTempo.Models;
using DesafioPrevisaoTempo.Models.DAL.Repositorios;
using Microsoft.AspNetCore.Mvc;

namespace DesafioPrevisaoTempo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CidadesController : ControllerBase
    {
        private readonly ICidadeRepositorio _cidadeRepositorio;

        public CidadesController(ICidadeRepositorio cidadeRepositorio)
        {
            _cidadeRepositorio = cidadeRepositorio;
        }

        [HttpGet]
        public IEnumerable<Cidade> Get()
        {
            return _cidadeRepositorio.Get();
        }

        [HttpGet("{id}", Name = "Get")]
        public Cidade Get(int id)
        {
            return _cidadeRepositorio.Get(id);
        }

        [HttpPost]
        public void Post([FromBody] Cidade value)
        {
            _cidadeRepositorio.Add(value);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Cidade value)
        {
            var cidade = _cidadeRepositorio.Get(id);
            if (cidade != null)
            {
                cidade.Nome = value.Nome;
                cidade.Estado = value.Estado;
                cidade.Pais = value.Pais;
                cidade.ApiId = value.ApiId;

                _cidadeRepositorio.Update(cidade);
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _cidadeRepositorio.Delete(id);
        }
    }
}
