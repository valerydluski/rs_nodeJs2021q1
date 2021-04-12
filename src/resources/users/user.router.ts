import { Router } from 'express';
import { User } from './user.model';
import { usersService } from './user.service';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

export { router };
