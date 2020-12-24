using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository {get; }
        IMessageRepository MessageRepository {get;}
        IPhotoRepository PhotoRepository{get;   }
        ILikesRepository LikesRepository {get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}