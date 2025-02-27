import prisma from "../db/db.js";

// fetching all posts
export const fetchPosts = async (req, res) => {
  const users = await prisma.user.findMany({});

  return res.status(200).json({ data: users });
};

// post create controller

export const createPost = async (req, res) => {
  const { user_id, title, description } = req.body;
  const newPost = await prisma.post.create({
    data: {
      user_id: Number(user_id),
      title,
      description,
    },
  });
  return res.status(200).json({ message: "post created", newPost });
};

// show single post

export const showPost = async (req, res) => {
  const postId = req.params.id;
  const post = await prisma.post.findFirst({
    where: {
      id: Number(postId),
    },
  });

  return res.status(200).josn({ data: post });
};

// post search controller

export const searchPost = async (req, res) => {
  const query = req.query.q;
  const posts = await prisma.post.findMany({
    where: {
      description: {
        search: query,
      },
    },
  });
  return res.json({ status: 200, data: posts });
};

// post delete controller

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  await prisma.post.delete({
    where: {
      id: Number(postId),
    },
  });
  return res.status(200).json({ message: "Post deleted successfully" });
};
