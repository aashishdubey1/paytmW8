const z = require('zod');

const signUpBody = z.object({
    username:z.string().email(),
    firstname:z.string().max(15),
    lastname:z.string().max(15),
    password:z.string().min(6)
})

const signInBody = z.object({
    username:z.string().email(),
    password:z.string(),
})

const updateBody= z.object({
    username:z.string().optional(),
    firstname:z.string().optional(),
    lastname:z.string().optional(),
})

module.exports = {
    signInBody,
    signUpBody,
    updateBody
};
