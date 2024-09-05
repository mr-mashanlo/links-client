import { IProfile, IProfileService } from '@/entities/profile';
import { authInstance } from '@/shared/api';

class ProfileService implements IProfileService {

  getAll = async () => {
    try {
      const response = await authInstance( 'profile/all', { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as Array<IProfile>;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  getOne = async ( id: string ) => {
    try {
      const response = await authInstance( `profile/${id}`, { method: 'get', headers: { 'content-type': 'application/json' } } );
      return await response.json() as IProfile;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

  update = async ( id: string, updates: Partial<IProfile> ) => {
    try {
      const response = await authInstance( `profile/${id}`, { method: 'put', body: JSON.stringify( { updates } ), headers: { 'content-type': 'application/json' } } );
      return await response.json() as IProfile;
    } catch ( error ) {
      return Promise.reject( error );
    }
  };

}

const profileService = new ProfileService();

export default profileService;