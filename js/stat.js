'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var CLOUD_BAR = ((BAR_WIDTH + BAR_GAP) * 4) - BAR_GAP;
var GAP_SIDE = (CLOUD_WIDTH - CLOUD_BAR) / 2;
var GAP_HEIGHT = 20;
var TEXT_HEIGHT = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#111';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + GAP, CLOUD_Y + GAP_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + GAP, CLOUD_Y + GAP_HEIGHT + GAP_HEIGHT - 5);

  ctx.fillStyle = '#111';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_SIDE + (BAR_GAP * i) + (BAR_WIDTH * i), CLOUD_HEIGHT - (BAR_HEIGHT * times[i] / maxTime) - 50);
    ctx.fillText(names[i], CLOUD_X + GAP_SIDE + (BAR_GAP * i) + (BAR_WIDTH * i), CLOUD_HEIGHT - GAP_HEIGHT);
    ctx.fillRect(CLOUD_X + GAP_SIDE + (BAR_GAP * i) + (BAR_WIDTH * i), CLOUD_HEIGHT - GAP - TEXT_HEIGHT - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime));
  }
};

