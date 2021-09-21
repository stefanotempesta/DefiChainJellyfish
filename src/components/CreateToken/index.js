import React, { useState } from "react";
import JsonViewer from "../JsonViewer";
import client from "../../config/jellyFish";

const CreateToken = () => {
  const [content, setContent] = useState();
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();

  const create = async (e) => {
    e.preventDefault();
    try {
      const res = await client.token.createToken({
        symbol: symbol,
        name: name,
        isDAT: false,
        mintable: true,
        tradeable: true,
        collateralAddress: "",
      });
      console.log(res);
      setContent(JSON.stringify(res, null, 2));
    } catch (err) {
      err = JSON.stringify(err, null, 2);
      err = JSON.parse(err);
      console.log(err);
      setContent(err.payload.message);
    }
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h3>Create Token </h3>
            <form onSubmit={create}>
              <div className="form-group">
                <label>Name</label>
                <input
                  required
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="form-group">
                <label>Symbol</label>
                <input
                  required
                  type="text"
                  onChange={(e) => {
                    setSymbol(e.target.value);
                  }}
                ></input>
              </div>
              <button type="submit" className="btn btn-s">
                Create
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-md-8">
            <JsonViewer content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateToken;
