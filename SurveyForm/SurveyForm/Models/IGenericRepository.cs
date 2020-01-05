using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyFormProject
{
    public interface IGenericRepository<T> where T:class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> GetAll(int pageSize,int pageNo);
        T Find(object Id);
        T Insert(T obj);
        T Update(T obj);
        bool Delete(object id);
        bool Delete(long id);
        void Save();
        IEnumerable<T> Filter(Func<T, bool> predicate);
        bool isValid(Func<T, bool> predicate);        
    }
}
