using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyForm.Models
{
    public class SurveyContext : DbContext
    {
        public SurveyContext()
        {
        }
        public SurveyContext(DbContextOptions<SurveyContext> options)
            : base(options)
        {
        }
        //public virtual DbSet<ColumnType> ColumnType { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Startup.connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
        }
    }
