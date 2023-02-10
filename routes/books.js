const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async function (req, res, next) {
  const allBooks = await prisma.book.findMany({
    include: {
      pages: true,
    },
  });
  res.send(allBooks);
});

module.exports = router;
