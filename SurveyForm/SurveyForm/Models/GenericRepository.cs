using Microsoft.EntityFrameworkCore;
using SurveyForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyForm
{
    public class GenericRepository<T>:IGenericRepository<T> where T:class
    {
        private SurveyContext _context = null;
        private DbSet<T> table = null;
        public GenericRepository()
        {
            this._context = new SurveyContext();
            table = _context.Set<T>();
        }
        public GenericRepository(SurveyContext _context)
        {
            this._context = _context;
            table = _context.Set<T>();
        }

        public bool Delete(object id)
        {
            T existing = table.Find(id);
            var v=table.Remove(existing);
            return true;
        }
        public bool Delete(long id)
        {
            T existing = table.Find(id);
            var v = table.Remove(existing);
            return true;
        }

        public T Find(object Id)
        {
            return table.Find(Id);
        }
        public IEnumerable<T> Filter(Func<T,bool> predicate)
        {
            return table.Where(predicate).AsEnumerable();
        }
        
        public bool isValid(Func<T, bool> predicate)
        {
            var result = table.Where(predicate).FirstOrDefault();
            if (result != null)
                return true;
            else
                return false;
        }
        public IEnumerable<T> GetAll()
        {
            return table.ToList();
        }
        public IEnumerable<T> GetAll(int pageSize, int pageNo)
        {
            return table.Take(pageSize * pageNo);
        }
        public T Insert(T obj)
        {
            table.Add(obj);
            return obj;
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public T Update(T obj)
        {
            table.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
            return obj;
        }
        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if(!this.disposed)
            {
                if(disposed)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
       
    }
}
