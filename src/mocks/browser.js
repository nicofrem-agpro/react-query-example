import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

const mocks = {
  start: () => {
    if (process.env.REACT_APP_ENV_TYPE === "mocks") {
      worker.start();
    }
  },
};

export default mocks;
