using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyFormProject.Models
{
    public partial class SurveyForm
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public long SurveyId { get; set; }
        public Guid UserId { get; set; }
        public int ProductId { get; set; }
        public string ProductFeedback { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedOn { get; set; }

    }
}
