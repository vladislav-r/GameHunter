import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
    },
    userRole: {
        type: String,
        required: true,
    },
    passwordHash: {
			type: String,
			required: true,
    }
});

// Хешируем пароль перед отправкой в БДс
UserSchema.pre('save', async function(next) {
	if(this.isModified('passwordHash')) {
		const salt = await bcrypt.genSalt(10);
		this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
	}
	next();

});

export default mongoose.model('User', UserSchema);