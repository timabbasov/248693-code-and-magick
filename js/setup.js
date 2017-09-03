'use strict';

(function () {
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var createWizards = function (arr) {
    for (var j = 0; j < 4; j++) {
      arr[j] = {
        name: window.util.getRandomElement(WIZARD_FIRST_NAMES) + ' ' + window.util.getRandomElement(WIZARD_SECOND_NAMES),
        coatColor: window.util.getRandomElement(WIZARD_COATS),
        eyesColor: window.util.getRandomElement(WIZARD_EYES)
      };
    }
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fillDOM = function (arr) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }

    similarListElement.appendChild(fragment);
  };

  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
  var wizards = [];

  createWizards(wizards);

  fillDOM(wizards);

  setup.querySelector('.setup-similar').classList.remove('hidden');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = WIZARD_COATS[window.util.getRandomInteger(0, WIZARD_COATS.length - 1)];
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = WIZARD_EYES[window.util.getRandomInteger(0, WIZARD_EYES.length - 1)];
  });

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = WIZARD_FIREBALLS[window.util.getRandomInteger(0, WIZARD_FIREBALLS.length - 1)];
  });
})();
