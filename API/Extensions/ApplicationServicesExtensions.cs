using System.Transactions;
using System.IO.Pipes;
using System.Xml.Schema;
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AutoMapper;
using API.Helpers;

namespace API.Extensions
{
    public static class ApplicationServicesExtensions
    {
        public static IServiceCollection  AddApplicationServices(this IServiceCollection services , IConfiguration config)
        {
                services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));                
                services.AddScoped<ITokenService,TokenService>();
                services.AddScoped<IPhotoService,PhotoServices>();
                services.AddScoped<IUserRepository,UserRepository>();
                services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly); 
                services.AddDbContext<DataContext>(options =>{
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            return services;
        }
    }
}