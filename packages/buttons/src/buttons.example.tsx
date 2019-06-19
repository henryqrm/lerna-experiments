import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./buttons"

storiesOf("Button", module).add("with text", () => <Button label="asda" />);