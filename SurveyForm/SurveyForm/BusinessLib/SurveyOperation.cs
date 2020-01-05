using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SurveyFormProject.Models;

namespace SurveyFormProject.BusinessLib
{
    public class SurveyOperation : ISurveyOperation
    {        
        public bool SaveSurvey(FeedbackRequest data)
        {
            try
            {
                IGenericRepository<SurveyFormProject.Models.SurveyForm> repository = new GenericRepository<SurveyFormProject.Models.SurveyForm>();
                SurveyFormProject.Models.SurveyForm surveyFrm = new Models.SurveyForm();
                surveyFrm.Comment = data.comment;
                surveyFrm.CreatedOn = DateTime.UtcNow;
                surveyFrm.ProductFeedback = data.productstatus;
                surveyFrm.ProductId = data.productId;
                surveyFrm.UserId = Guid.NewGuid();
                repository.Insert(surveyFrm);
                repository.Save();
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
              
    }

    public interface ISurveyOperation
    {
        bool SaveSurvey(FeedbackRequest data);        
    }
}
