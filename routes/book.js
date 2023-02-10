const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.get("/:id", async function (req, res, next) {
  const book = await prisma.book.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      pages: true,
    },
  });
  res.send(book);
});

router.get("/:id/:page/:format", async function (req, res, next) {
  const format = req.params.format;
  const page = await prisma.bookPage.findFirst({
    where: {
      bookId: +req.params.id,
      pageNum: +req.params.page,
    },
  });

  res.send(format === "html" ? page.html : page.text);
});

module.exports = router;
