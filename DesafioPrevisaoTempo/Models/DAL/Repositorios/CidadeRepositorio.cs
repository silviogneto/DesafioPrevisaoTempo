using System.Collections.Generic;
using System.Linq;

namespace DesafioPrevisaoTempo.Models.DAL.Repositorios
{
    public class CidadeRepositorio : ICidadeRepositorio
    {
        private readonly CidadeContext _context;

        public CidadeRepositorio(CidadeContext context)
        {
            _context = context;
        }

        public IEnumerable<Cidade> Get()
        {
            return _context.Cidades;
        }

        public Cidade Get(int id)
        {
            return _context.Cidades.Single(x => x.Id == id);
        }

        public void Add(Cidade cidade)
        {
            _context.Cidades.Add(cidade);
            _context.SaveChanges();
        }

        public void Update(Cidade cidade)
        {
            _context.Cidades.Update(cidade);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var cidade = _context.Cidades.SingleOrDefault(x => x.Id == id);
            if (cidade != null)
            {
                _context.Cidades.Remove(cidade);
                _context.SaveChanges();
            }
        }
    }
}
