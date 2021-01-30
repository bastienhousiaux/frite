import { PIXIFactory } from "../src/core/PIXIFactory.js";

const factory = new PIXIFactory();
const app = factory.createApp({});
document.body.appendChild(app.view);
