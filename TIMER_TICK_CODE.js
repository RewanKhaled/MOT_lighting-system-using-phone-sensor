GetLatestValueOfSensor(71809, function(res) {
  res = JSON.parse(res);
  var status = res.currentLuxValue;

  if (status > 0 && status < 20) {
    SetPluginParameterValue('Shape 1', 'Color', 'red');
    DrawPlugin('Shape 1');
  } else if (status > 20 && status < 50) {
    SetPluginParameterValue('Shape 1', 'Color', 'green');
    DrawPlugin('Shape 1');
  } else if (status > 50) {
    SetPluginParameterValue('Shape 1', 'Color', 'blue');
    DrawPlugin('Shape 1');
  }

  SetPluginParameterValue('LabelV2 1', 'Caption', status);
  DrawPlugin('LabelV2 1');
});