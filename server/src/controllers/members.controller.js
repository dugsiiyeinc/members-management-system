import MemberModel from "../models/member.model.js";

export const addMember = async (req, res) => {

    // const { name, email, age, role } = req.body;
    
    try {

        // const newMember = new MemberModel({
            //     name,
            //     email,
            //     age,
            //     role
            // })

            const newMember = new MemberModel({ ...req.body, author: req.user.id });

            await newMember.save();

            res.status(200).send({ status: 'true', message: 'Member added successfully'});
            
            
        } catch (error) {
            console.log('error at adding member', error);

            res.status(500).send({ status: 'false', message: 'unknown error' });
    }

}