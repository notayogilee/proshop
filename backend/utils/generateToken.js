import JWT from 'jsonwebtoken';

const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, {
    // use 30 days for dev
    expiresIn: '30d'
  });
}

export default generateToken;