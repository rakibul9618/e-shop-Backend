const notFound = (_req, res) => {
  res.status(400).json({ message: "Sorry, that route doesn't exist" });
};

export default notFound;
