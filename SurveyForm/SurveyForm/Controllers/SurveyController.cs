using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SurveyFormProject.BusinessLib;
using SurveyFormProject.Models;

namespace SurveyFormProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurveyController : ControllerBase
    {
        ISurveyOperation _surveyOperation;
        public SurveyController(ISurveyOperation surveyOperation)
        {
            _surveyOperation = surveyOperation;
        }

        [HttpPost]
        [Route("Save")]
        public IActionResult Save([FromBody] FeedbackRequest data)
        {

            if (data.productId <= 0)
                return BadRequest("Invalid Product");
            if (string.IsNullOrEmpty(data.productstatus) == true)
                return BadRequest("Invalid Status");

            try
            {
                var result = _surveyOperation.SaveSurvey(data);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
                
    }
}