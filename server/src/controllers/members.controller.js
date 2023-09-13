import MemberModel from "../models/member.model.js";

export const addMember = async (req, res) => {

    try {

        const newMember = new MemberModel({ ...req.body, manager: req.user.id });

        await newMember.save();

        res.status(200).send({ status: 'true', message: 'Member added successfully' });


    } catch (error) {
        console.log('error at adding member', error);

        res.status(400).send({ status: 'false', message: 'unknown error' });
    }

};

export const readMembers = async (req, res) => {

    try {
        const members = await MemberModel.find({ manager: req.user.id }).populate("manager", "-password")

        if (members.length == 0) {
            return res.status(404).send({ status: 'false', message: 'you haven\'t created a member yet' });
        }

        res.status(200).send({ status: 'true', message: members });

    } catch (error) {
        console.log('error at reading members', error);

        res.status(400).send({ status: 'false', message: 'unknown error' });
    }
}

export const updateMember = async (req, res) => {
    try {

        const member = await MemberModel.findById(req.params.id);

        if (!member) return res.status(404).send("Not Found");

        const currentUser = req.user.id;

        if (currentUser !== member.manager.toString()) {
            return res.status(403).send("members must update the manager ");
        }

        await MemberModel.findByIdAndUpdate(req.params.id, { ...req.body });

        res.status(200).send("updated successfully");

    } catch (error) {
        console.log("error updating member", error);
        res.status(400).send("error updating member");
    }
};

export const deleteMember = async (req, res) => {
    try {

        // const { name, email, age, role } = req.body;

        const member = await MemberModel.findById(req.params.id);

        if (!member) return res.status(404).send("Not Found");

        const currentUser = req.user.id;

        if (currentUser !== member.manager.toString()) {
            return res.status(403).send("members must delete by the manager ");
        }
        
        await MemberModel.findByIdAndDelete(req.params.id);

        res.status(200).send("deleted successfully");

    } catch (error) {
        console.log("error deleting member", error);
        res.status(400).send("error deleting member");
    }
};
