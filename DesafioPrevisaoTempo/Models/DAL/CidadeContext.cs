using Microsoft.EntityFrameworkCore;

namespace DesafioPrevisaoTempo.Models.DAL
{
    public class CidadeContext : DbContext
    {
        public virtual DbSet<Cidade> Cidades { get; set; }

        public CidadeContext(DbContextOptions<CidadeContext> options)
            : base(options)
        {
        }
    }
}
