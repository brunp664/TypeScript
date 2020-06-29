import {Request, Response} from 'express'

import createUser from './services/CreateUser';

export function helloWord(request: Request, response: Response) {
  const user = createUser({
    name: 'Bruno', 
    email: 'bruno.432@hotmail.com', 
    senha: '123',
    techs: [
      'node.js', 
      'ReactNative', 
      'ReactJs',
      {title: 'javascript', experience: 100},
    ],
  });

  console.log(user.email)
  return response.json({message: 'Hello Word'});
}