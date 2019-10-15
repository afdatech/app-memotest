import Route from "@ember/routing/route";

export default Route.extend({
  isPaused: false,

  actions: {
    pause: function() {
      if (!this.get("isPaused")) {
        document.getElementById("main-sound").pause();
        this.set("isPaused", true);
      } else {
        this.set("isPaused", false);
        document.getElementById("main-sound").play();
      }
    }
  }
});
