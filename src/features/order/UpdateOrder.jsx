import React, { useState } from "react";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const [updateText, setUpdateText] = useState("Make priority");

  const handleClick = function () {
    setUpdateText("Just a sec...");
  };

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" onClick={handleClick}>
        {updateText}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
