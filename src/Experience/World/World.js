import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Duck from "./Duck.js";
import Intro from "../Intro.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.duck = new Duck();
      this.environment = new Environment();
    });
  }

  update() {
    if (this.duck) {
      this.duck.update();
    }
  }
}
