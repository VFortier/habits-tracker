


exports.listGoalTypes = function(req, res) {
  res.json({test: "is this a test?"});
};



/* example with Mongo
exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
*/