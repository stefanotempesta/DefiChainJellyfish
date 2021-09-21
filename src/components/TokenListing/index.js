import React, { useState } from "react";
import JsonViewer from "../JsonViewer";
import client from "../../config/jellyFish";

const TokenListing = () => {
  const [content, setContent] = useState();

  const listTokens = async () => {
    try {
      const res = await client.token.listTokens();
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
          <div className="col-sm-12 col-md-4 section-h">
            <h3>List Tokens</h3>
            <button type="button" className="btn btn-s" onClick={listTokens}>
              Listing
            </button>
          </div>
          <div className="col-sm-12 col-md-8">
            <JsonViewer content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenListing;
