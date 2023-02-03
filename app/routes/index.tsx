import type { ActionArgs } from "@remix-run/node"
import { Form } from "@remix-run/react"
import mongoose from "mongoose"
import RunEntry from "../models/RunEntry"
import styles from "~/styles/index/index.css"

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const action = async ({ request }: ActionArgs) => {
  // @ts-ignore
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING)

  const body = await request.formData()
  const entry = new RunEntry({
    text: body.get("text"),
    date: body.get("date"),
    distance: body.get("distance")
  })

  const response = await entry.save()

  return "Nothing"
}



export default function Index() {
  return (
    <div className="container">
      <img className="map" alt="Map of middle earth showing Frodos journey and users progress in that journey" src="/images/mapOfMiddleEarth.jpeg"/>
      <Form method="post">
          <input type="date" name="date"/>
          <input type="text" name="text"/>
          <input type="number" name="distance"/>
          <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
