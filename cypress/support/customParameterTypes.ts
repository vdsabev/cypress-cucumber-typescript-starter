import { defineParameterType } from 'cypress-cucumber-preprocessor/steps';

defineParameterType({
  name: 'ordinal',
  regexp: /(\d+)(?:st|nd|rd|th)/,
  transformer(value) {
    return parseInt(value, 10);
  },
});
