import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  name: DS.attr("string"),
  title: DS.attr("string"),
  lvlclass: DS.attr("string"),
  total: DS.attr("number"),
  comboModifier: DS.attr("number"),
  time: DS.attr("number"),
  cards: DS.hasMany("card")
});
