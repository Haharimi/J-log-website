import passport from 'passport';
import User from './model/User';

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); // 쿠키에는 오직 user.id만 담아보내라는 의미
passport.deserializeUser(User.deserializeUser());
