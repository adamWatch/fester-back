import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';

export function initialize(passport:any, getUserByEmail:any, getUserById:any) {
	const authenticateUser = async (email:string, password:string, done:any) => {
		const user = getUserByEmail(email);
		if (user == null) {
			return done(null, false, { message: 'No user with that email', });
		}

		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			}
			return done(null, false, { message: 'Password incorrect', });
		} catch (e) {
			return done(e);
		}
	};

	passport.use(new LocalStrategy({ usernameField: 'email', }, authenticateUser));
	passport.serializeUser((user:any, done:any) => done(null, user.id));
	passport.deserializeUser((id:any, done:any) => done(null, getUserById(id)));
}
