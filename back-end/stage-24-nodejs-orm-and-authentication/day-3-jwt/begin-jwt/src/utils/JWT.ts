import * as jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET || 'asdadyy2887asdjnjasdyu23uij123@asudja29';

const generateJWT = (payload: any) => jwt.sign(payload, SECRET, { expiresIn: '10m', algorithm: 'HS256'});

// const authenticateJWT = async (token: string) => {
//   if (!token) {
    
//   }
// };

export { generateJWT };