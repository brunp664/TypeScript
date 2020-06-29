interface techObj{
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  senha: string;
  techs: Array<string | techObj>
}


export default function createUser({name = '', email, senha}:CreateUserData ){
  const user = {
    name,
    email,
    senha,
  }
  return user;
}