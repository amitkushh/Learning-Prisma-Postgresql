import prisma from "../db/db.js";

// fetching all users
export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({});

  return res.status(200).json({ data: users });
};

// user create controller

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    res
      .status(400)
      .json({ message: "user already taken. please enter another email" });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return res.status(200).json({ message: "user created", newUser });
};

// show single user

export const showUser = async (req, res) => {
  const userId = req.params.id;
  const user = prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });
  return res.status(200).json({ data: user });
};

// user update controller

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });

  res.status(200).json({ message: "user updated succsessfully" });
};

// user delete controller

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });
  return res.status(200).json({ message: "User deleted successfully" });
};
