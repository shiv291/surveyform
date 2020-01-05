using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyFormProject.Models
{
    public class FeedbackRequest
    {
        public int productId { get; set; }
        public string productstatus { get; set; }
        public string comment { get; set; }
    }
}
