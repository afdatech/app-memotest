import Component from "@ember/component";

export default Component.extend({
  bloked: false,
  model: null,

  isBloked: Ember.computed("model.bloked", "bloked", function() {
    return this.get("bloked") || this.get("model").get("bloked");
  }),

  isFlipped: Ember.computed("model.flipped", function() {
    return this.get("model.flipped") || this.get("model.bloked");
  }),

  actions: {
    toggleOpen() {
      if (!this.get("isBloked")) {
        this.sendAction("flipped", this.model);
      }
    }
    /*
    click() {
      this.submit();
    }
    */
  }
});
