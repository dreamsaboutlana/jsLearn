'use strict';

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP', 'css'],
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

function goodDev(dev) {

  let requiresArray = this.requires;
  let newSkills = this.skills;
  let newExperience = this.experience;

  if (Array.isArray(newSkills)) {

    requiresArray.forEach((elem, index) => {

      countSkills(newSkills, elem);

    });

  } else if (newExperience) {

    Object.keys(newExperience).forEach((elem) => {

      let tech = newExperience[elem].technology;
      
      countSkills(requiresArray, tech)

    });
  }
}

function countSkills(arr, elem) {
  let flag = false;

  for (let i = 0; i < arr.length; i++) {
    if (elem === arr[i]) {
      console.log(arr[i] + '... success');
      flag = true;
    }
  }
  if (!flag) {
    console.log(elem + ' ... fail');
  }
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
  console.log(`developer ${index + 1}`);
  dev.goodDev();
});
