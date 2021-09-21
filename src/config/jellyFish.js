const jellyfish = require("@defichain/jellyfish");
const client = new jellyfish.Client(process.env.REACT_APP_URI, {
  timeout: 20000,
});

export default client;
