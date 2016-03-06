var visible_job;
var week;

$(document).ready(function () {
  start = new Date(2015, 0, 26, 0, 0, 0, 0);
  week = weeks_since(start);
  visible_job = get_job(0);
  visible_job.addClass('in');

  $('#flat-cop-' + (mod(-week + 0, 3))).html('Mopping - coordinate with sweeper.');
  $('#flat-cop-' + (mod(-week + 1, 3))).html('Clean fridge.');
  $('#flat-cop-' + (mod(-week + 2, 3))).html('Clean microwave.');

  if (week % 2 == 0) {
    $('#gardening-0').html('This week bags.');
    $('#gardening-1').html('Next week bin.');
  }
  else {
    $('#gardening-0').html('This week bin.');
    $('#gardening-1').html('Next week bags.');
  }
});

function weeks_since(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  return Math.floor(seconds / 86400 / 7);
}

function dropdown_changed() {
  var value = $('#dropdown').val();
  visible_job.on('hidden.bs.collapse', function () {
    show_next();
  });
  visible_job.collapse('hide');
  visible_job = get_job(value);
}

function get_job(value) {
  if (value == 0)
    return $('#job-everyone');
  if (value == (week + 0) % 4 + 1)
    return $('#job-bathroom');
  if (value == (week + 1) % 4 + 1)
    return $('#job-cop');
  if (value == (week + 2) % 4 + 1)
    return $('#job-gardening');
  if (value == (week + 3) % 4 + 1)
    return $('#job-sweeping');
}

function show_next() {
  visible_job.collapse('show');
}

function mod(a, b) {
  return ((a%b)+b)%b;
}
