exports.getOverview = (req, res) => {
  // 1) Get tour data from collection
  res.status(200).render('overview', {
    title: 'All Tours',
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker',
  });
};
