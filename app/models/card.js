import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  className: DS.attr("string"),
  flipped: DS.attr("boolean"),
  bloked: DS.attr("boolean")
});
