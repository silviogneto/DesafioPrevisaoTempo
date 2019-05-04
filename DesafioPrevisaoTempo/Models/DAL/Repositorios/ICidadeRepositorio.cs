using System.Collections.Generic;

namespace DesafioPrevisaoTempo.Models.DAL.Repositorios
{
    public interface ICidadeRepositorio
    {
        IEnumerable<Cidade> Get();
        Cidade Get(int id);
        void Add(Cidade cidade);
        void Update(Cidade cidade);
        void Delete(int id);
    }
}
