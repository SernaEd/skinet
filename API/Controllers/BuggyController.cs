﻿using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController(StoreContext context) : BaseApiController
{
    private readonly StoreContext _context = context;

    [HttpGet("notfound")]
    public ActionResult GetNotFoundRequest()
    {
        var thing = _context.Products.Find(42);

        return thing == null ? NotFound(new ApiResponse(404)) : Ok();
    }
    
    [HttpGet("servererror")]
    public ActionResult GetServerError()
    {
        var thing = _context.Products.Find(42);
        
        var thingToReturn = thing.ToString();
        
        return Ok();
    }
    
    [HttpGet("badrequest")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ApiResponse(400));
    }
    
    [HttpGet("badrequest/{id}")]
    public ActionResult GetBadRequest(int id)
    {
        return id.GetType() != typeof(int) ? BadRequest() : null;
    }
}