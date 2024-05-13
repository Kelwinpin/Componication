import { Button, ButttonProps } from "../../../../src/components/Button";
import {Meta, StoryObj} from "@storybook/react";

export default {
    title: "Button",
    component: Button,
    args:{
        children: "Button",
    },
    argTypes: {
        variant: {
            control: {                
                options: ["default", "outlined"],
                type: "inline-radio",
            },
        },
    },
} as Meta<ButttonProps>;

export const Default: StoryObj<ButttonProps> = {}