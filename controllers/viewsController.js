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

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};
