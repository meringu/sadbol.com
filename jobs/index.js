$(document).ready(function () {
  var dates = [];

  for (var i = 0; i < 3; i++) {
    var date = Date.today().add(-8 + i * 7).days().next().sunday();
    dates.push(date.getDate() + '/' + (date.getMonth() + 1));
  }

  var job_table = $('#job-table');

  job_table.append($('<thead>')
    .append($('<tr>')
      .append($('<th>').append('Flatmate'))
      .append($('<th>').append('Last Week ' + dates[0]))
      .append($('<th>').append('This Week ' + dates[1]))
      .append($('<th>').append('Next Week ' + dates[2]))
    )
  )

  var flatmates = ['Martin', 'Aliscia', 'Ryan', 'Joel', 'Henry', 'Chlo&eacute;'];

  var jobs = [
    'Bathroom',
    'Dishes + Surfaces + Microwave',
    'Rear Shower',
    'Rubbish Bins',
    'Kitchen + Bathroom Floors',
    'Vacuum'
  ]

  for (var i = 0; i < flatmates.length; i++) {
    job_table.append($('<tr>')
      .append($('<td>').append(flatmates[i]))
      .append($('<td>').append(jobs[i]))
      .append($('<td>').append(jobs[(i + jobs.length - 1) % jobs.length]))
      .append($('<td>').append(jobs[(i + jobs.length - 2) % jobs.length]))
    )
  }
});
