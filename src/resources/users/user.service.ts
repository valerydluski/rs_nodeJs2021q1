import { usersRepo } from './user.memory.repository';

// TODO: mock implementation. should be replaced during task development
const usersService = {
    getAll: () => usersRepo.getAll()
};

export { usersService };
