const {
  students,
  quest_pathways,
} = require('./data');

// Get Student List
async function getStudents(req, res, next) {
  try {
    const total = await students.length;
    const items = await students;

    return res
      .set('X-Pagination-Page-Count', 1)
      .set('X-Pagination-Current-Page', 10)
      .set('X-Pagination-Per-Page', 10)
      .set('X-Pagination-Total-Count', total)
      .json(items);
  } catch (err) {
    return next(err);
  }
}

// Get Student Detail
async function getStudentDetail(req, res, next) {
  try {
    const quest_paths = await quest_pathways.find(t => (t.user_id === parseInt(req.params.studentId, 10)));

    if (!quest_paths) {
      return next(notFoundExc('Student not found'));
    }
    return res.json(quest_paths);
  } catch (err) {
    return next(err);
  }
}


module.exports = {
  getStudents,
  getStudentDetail,
};
