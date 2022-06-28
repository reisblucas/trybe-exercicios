interface IUserSignup {
  username: string;
  password: string;
  name: string;
  age: number
};

interface IUserSignin {
  username: string;
  password: string;
};

export {
  IUserSignup,
  IUserSignin,
};